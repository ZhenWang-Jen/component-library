const treeChart = () => {
  // ----- Backbone Models and Views -----

var TreemapModel = Backbone.Model.extend({
  // holds treemap data and a selected_point state value
  select_point: function (point_id) {
      this.set({
          'selected_point': this.find_point(point_id)
      });
  },

  find_point: function (point_id) {
      return _.find(this.get('data'), function (point) {
          return point.id == point_id;
      });
  },
});

var BreadcrumbModel = Backbone.Model.extend({
  // maintains a list of breadcrumb points
  initialize: function () {
      this.reset();
  },

  reset: function () {
      this.set({
          'crumbs': []
      })
  },

  add_point: function (point) {
      // Backbone won't trigger a 'change' event if we use push
      // because the underlying array is the same, but concat
      // creates & returns a new array
      this.set({
          'crumbs': this.get('crumbs').concat(point)
      });
  },

  rewind_to: function (id) {
      // rewinds crumbs so the given id is the leaf node
      var new_crumbs = [],
          found = false;
      _.each(this.get('crumbs'), function (crumb) {
          if (!found) {
              new_crumbs.push(crumb);
              if (crumb.id == id) {
                  found = true;
              }
          }
      });
      this.set({
          'crumbs': new_crumbs
      });
  },

  is_leaf: function (point) {
      // returns true if given point is the leaf node of the crumbs
      var last = _.last(this.get('crumbs'));
      return (last && last.id == point.id);
  }
});

var TreemapView = Backbone.View.extend({
  // view for managing treemap itself
  initialize: function (options) {
      _.bindAll(this,
          'drill_to_point',
          'render');

      this.model.bind('change:selected_point', this.drill_to_point);

      // normally you'd want to bind render to the model change:data
      // event and then call model.fetch() here
      this.render();
  },

  drill_to_point: function () {
      // drills to currently selected data point
      // triggered by model change event
      var point = this.model.get('selected_point');
      if (point == null) {
          this.chart.series[0].drillToNode('');
      } else if (this.chart.series[0].rootNode != point.id) {
          this.chart.series[0].drillToNode(point.id);
      }
  },

  render: function (points) {
      // (re)draw the treemap
      var model = this.model,
          data = this.model.get('data');

      this.chart = new Highcharts.Chart({
          chart: {
              renderTo: this.el
          },
          plotOptions: {
              treemap: {
                  events: {
                      click: function (event) {
                          // update model with newly selected point
                          model.select_point(event.point.id);
                      }
                  }
              }
          },
          series: [{
              type: 'treemap',
              layoutAlgorithm: 'squarified',
              allowDrillToNode: true,
              dataLabels: {
                  enabled: false
              },
              levelIsConstant: false,
              levels: [{
                  level: 1,
                  dataLabels: {
                      enabled: true,
                      color: '#000'
                  },
                 color: 'rgba(255,255,255,0)',
                  borderWidth: 3,
                  borderColor: '#AAA'
              }],
              data: data
          }],
          subtitle: {
              text: ''
          },
          title: {
              text: ''
          }
      });
  }
});

var BreadcrumbView = Backbone.View.extend({
  // view for managing treemap breadcrumbs
  top_template: _.template('Top Level'),
  
  top_link_template: _.template('<a class="js_all" href="javascript:void(0)">Top Level</a>'),
  
  plain_template: _.template(' &gt; <%= name %>'),

  link_template: _.template(' &gt; <a class="js_drill" rel="<%= id %>" href="javascript:void(0)"><%= name %></a>'),

  events: {
      'click .js_drill': 'drill_up',
      'click .js_all': 'drill_to_top'
  },

  initialize: function (options) {
      // expect treemap_model to be passed in via options
      _.bindAll(this,
          'drill_up',
          'drill_to_top',
          'render',
          'render_crumb',
          'treemap_change');

      if(!this.model) {
          this.model = new BreadcrumbModel();
      }
      this.model.bind('change', this.render);

      // drill down when ever treemap model changes its selected point
      this.treemap_model = options.treemap_model;
      this.treemap_model.bind('change:selected_point', this.treemap_change);
  },

  drill_up: function (event) {
      // drill up one level
      // clears out existing breadcrumbs then updates treemap model
      var id = $(event.target).attr('rel')
      this.model.rewind_to(id);
      this.treemap_model.select_point(id);
  },

  drill_to_top: function () {
      // drill to the very top of the treemap
      this.model.reset();
      this.treemap_model.select_point(null);
  },

  render: function () {
      // redraw breadcrumbs based on current model values
      this.$el.html('');
      var crumbs = this.model.get('crumbs'),
          render_crumb = this.render_crumb,
          top_template = this.top_template;

      if(crumbs.length > 0) {
          top_template = this.top_link_template;
      }
      
      this.$el.append(top_template());
      
      _.each(crumbs, function (point, index) {
          var last = (index == crumbs.length - 1);
          render_crumb(point, last);
      });
  },

  render_crumb: function (point, last) {
      if (last) {
          this.$el.append(this.plain_template({
              'name': point.name
          }));
      } else {
          this.$el.append(this.link_template({
              'id': point.id,
                  'name': point.name
          }));
      }
  },

  treemap_change: function () {
      // respond to a treemap drill event, updates crumbs model
      var point = this.treemap_model.get('selected_point');
      if (point == null) {
          this.model.reset();
      } else if (!this.model.is_leaf(point)) {
          this.model.add_point(point);
      }
  }
});

// ----- Data and Initialization Code -----

// fairly large dataset (Backbone stuff is initialized at the
// bottom)
var data = [
  {'id': 'february', 'name': 'February'},
  {'id': 'october', 'name': 'October'},
  {'id': 'march', 'name': 'March'},
  {'id': 'august', 'name': 'August'},
  {'id': 'april', 'name': 'April'},
  {'id': 'september', 'name': 'September'},
  {'id': 'january', 'name': 'January'},
  {'id': 'june', 'name': 'June'},
  {'id': 'may', 'name': 'May'},
  {'id': 'december', 'name': 'December'},
  {'id': 'november', 'name': 'November'},
  {'id': 'july', 'name': 'July'},
  {'id': 'march_monday', 'parent': 'march', 'name': 'Monday'},
  {'id': 'february_sunday', 'parent': 'february', 'name': 'Sunday'},
  {'id': 'november_monday', 'parent': 'november', 'name': 'Monday'},
  {'id': 'june_wednesday', 'parent': 'june', 'name': 'Wednesday'},
  {'id': 'july_wednesday', 'parent': 'july', 'name': 'Wednesday'},
  {'id': 'october_saturday', 'parent': 'october', 'name': 'Saturday'},
  {'id': 'march_wednesday', 'parent': 'march', 'name': 'Wednesday'},
  {'id': 'december_tuesday', 'parent': 'december', 'name': 'Tuesday'},
  {'id': 'may_friday', 'parent': 'may', 'name': 'Friday'},
  {'id': 'january_wednesday', 'parent': 'january', 'name': 'Wednesday'},
  {'id': 'july_monday', 'parent': 'july', 'name': 'Monday'},
  {'id': 'april_wednesday', 'parent': 'april', 'name': 'Wednesday'},
  {'id': 'february_saturday', 'parent': 'february', 'name': 'Saturday'},
  {'id': 'may_thursday', 'parent': 'may', 'name': 'Thursday'},
  {'id': 'october_monday', 'parent': 'october', 'name': 'Monday'},
  {'id': 'april_monday', 'parent': 'april', 'name': 'Monday'},
  {'id': 'march_friday', 'parent': 'march', 'name': 'Friday'},
  {'id': 'july_friday', 'parent': 'july', 'name': 'Friday'},
  {'id': 'may_sunday', 'parent': 'may', 'name': 'Sunday'},
  {'id': 'october_sunday', 'parent': 'october', 'name': 'Sunday'},
  {'id': 'september_saturday', 'parent': 'september', 'name': 'Saturday'},
  {'id': 'february_monday', 'parent': 'february', 'name': 'Monday'},
  {'id': 'november_thursday', 'parent': 'november', 'name': 'Thursday'},
  {'id': 'june_sunday', 'parent': 'june', 'name': 'Sunday'},
  {'id': 'september_tuesday', 'parent': 'september', 'name': 'Tuesday'},
  {'id': 'october_thursday', 'parent': 'october', 'name': 'Thursday'},
  {'id': 'january_friday', 'parent': 'january', 'name': 'Friday'},
  {'id': 'december_saturday', 'parent': 'december', 'name': 'Saturday'},
  {'id': 'may_monday', 'parent': 'may', 'name': 'Monday'},
  {'id': 'november_wednesday', 'parent': 'november', 'name': 'Wednesday'},
  {'id': 'august_sunday', 'parent': 'august', 'name': 'Sunday'},
  {'id': 'september_sunday', 'parent': 'september', 'name': 'Sunday'},
  {'id': 'july_sunday', 'parent': 'july', 'name': 'Sunday'},
  {'id': 'march_saturday', 'parent': 'march', 'name': 'Saturday'},
  {'id': 'june_friday', 'parent': 'june', 'name': 'Friday'},
  {'id': 'july_saturday', 'parent': 'july', 'name': 'Saturday'},
  {'id': 'april_thursday', 'parent': 'april', 'name': 'Thursday'},
  {'id': 'april_saturday', 'parent': 'april', 'name': 'Saturday'},
  {'id': 'march_tuesday', 'parent': 'march', 'name': 'Tuesday'},
  {'id': 'july_thursday', 'parent': 'july', 'name': 'Thursday'},
  {'id': 'february_thursday', 'parent': 'february', 'name': 'Thursday'},
  {'id': 'january_monday', 'parent': 'january', 'name': 'Monday'},
  {'id': 'march_thursday', 'parent': 'march', 'name': 'Thursday'},
  {'id': 'october_tuesday', 'parent': 'october', 'name': 'Tuesday'},
  {'id': 'june_tuesday', 'parent': 'june', 'name': 'Tuesday'},
  {'id': 'may_wednesday', 'parent': 'may', 'name': 'Wednesday'},
  {'id': 'november_sunday', 'parent': 'november', 'name': 'Sunday'},
  {'id': 'june_saturday', 'parent': 'june', 'name': 'Saturday'},
  {'id': 'november_saturday', 'parent': 'november', 'name': 'Saturday'},
  {'id': 'may_saturday', 'parent': 'may', 'name': 'Saturday'},
  {'id': 'may_tuesday', 'parent': 'may', 'name': 'Tuesday'},
  {'id': 'september_friday', 'parent': 'september', 'name': 'Friday'},
  {'id': 'july_tuesday', 'parent': 'july', 'name': 'Tuesday'},
  {'id': 'august_monday', 'parent': 'august', 'name': 'Monday'},
  {'id': 'december_thursday', 'parent': 'december', 'name': 'Thursday'},
  {'id': 'august_tuesday', 'parent': 'august', 'name': 'Tuesday'},
  {'id': 'december_friday', 'parent': 'december', 'name': 'Friday'},
  {'id': 'january_tuesday', 'parent': 'january', 'name': 'Tuesday'},
  {'id': 'january_saturday', 'parent': 'january', 'name': 'Saturday'},
  {'id': 'april_friday', 'parent': 'april', 'name': 'Friday'},
  {'id': 'september_wednesday', 'parent': 'september', 'name': 'Wednesday'},
  {'id': 'september_monday', 'parent': 'september', 'name': 'Monday'},
  {'id': 'april_sunday', 'parent': 'april', 'name': 'Sunday'},
  {'id': 'january_sunday', 'parent': 'january', 'name': 'Sunday'},
  {'id': 'october_wednesday', 'parent': 'october', 'name': 'Wednesday'},
  {'id': 'june_monday', 'parent': 'june', 'name': 'Monday'},
  {'id': 'august_saturday', 'parent': 'august', 'name': 'Saturday'},
  {'id': 'august_wednesday', 'parent': 'august', 'name': 'Wednesday'},
  {'id': 'february_friday', 'parent': 'february', 'name': 'Friday'},
  {'id': 'february_wednesday', 'parent': 'february', 'name': 'Wednesday'},
  {'id': 'june_thursday', 'parent': 'june', 'name': 'Thursday'},
  {'id': 'september_thursday', 'parent': 'september', 'name': 'Thursday'},
  {'id': 'november_tuesday', 'parent': 'november', 'name': 'Tuesday'},
  {'id': 'january_thursday', 'parent': 'january', 'name': 'Thursday'},
  {'id': 'march_sunday', 'parent': 'march', 'name': 'Sunday'},
  {'id': 'december_sunday', 'parent': 'december', 'name': 'Sunday'},
  {'id': 'august_friday', 'parent': 'august', 'name': 'Friday'},
  {'id': 'april_tuesday', 'parent': 'april', 'name': 'Tuesday'},
  {'id': 'december_wednesday', 'parent': 'december', 'name': 'Wednesday'},
  {'id': 'august_thursday', 'parent': 'august', 'name': 'Thursday'},
  {'id': 'october_friday', 'parent': 'october', 'name': 'Friday'},
  {'id': 'february_tuesday', 'parent': 'february', 'name': 'Tuesday'},
  {'id': 'december_monday', 'parent': 'december', 'name': 'Monday'},
  {'id': 'november_friday', 'parent': 'november', 'name': 'Friday'},
  {'value': 1, 'id': 'november_saturday_0', 'parent': 'november_saturday', 'name': 'CHOC-DIPPED COOKIES & CREME'},
  {'value': 1, 'id': 'november_thursday_0', 'parent': 'november_thursday', 'name': 'VANILLA CARAMEL GANACHE'},
  {'value': 1, 'id': 'november_wednesday_0', 'parent': 'november_wednesday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'november_monday_0', 'parent': 'november_monday', 'name': 'CHOC-DIPPED MAPLE CHOC CHIP'},
  {'value': 1, 'id': 'november_sunday_0', 'parent': 'november_sunday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'november_saturday_1', 'parent': 'november_saturday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'november_friday_0', 'parent': 'november_friday', 'name': 'CHOCOLATE-DIPPED CARAMEL'},
  {'value': 1, 'id': 'november_thursday_1', 'parent': 'november_thursday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'november_wednesday_1', 'parent': 'november_wednesday', 'name': 'CHOCOLATE-DIPPED MAPLE CHOC CHIP'},
  {'value': 1, 'id': 'november_saturday_2', 'parent': 'november_saturday', 'name': 'CHOCOLATE-DIPPED MAPLE CHOC CHIP'},
  {'value': 1, 'id': 'october_friday_0', 'parent': 'october_friday', 'name': 'HALLOWEEN SURPRISE'},
  {'value': 1, 'id': 'october_thursday_0', 'parent': 'october_thursday', 'name': 'CHOCOLATE-DIPPED TOFFEE CRUNCH'},
  {'value': 1, 'id': 'october_tuesday_0', 'parent': 'october_tuesday', 'name': 'CHOCOLATE CARAMEL HAZELNUT'},
  {'value': 1, 'id': 'october_monday_0', 'parent': 'october_monday', 'name': 'CHOCOLATE-DIPPED CHOC TOFFEE CRUNCH'},
  {'value': 1, 'id': 'october_friday_1', 'parent': 'october_friday', 'name': 'CHOCOLATE-DIPPED COCONUT'},
  {'value': 1, 'id': 'october_thursday_1', 'parent': 'october_thursday', 'name': 'CHOCOLATE-DIPPED COOKIES & CREME'},
  {'value': 1, 'id': 'october_tuesday_1', 'parent': 'october_tuesday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'october_monday_1', 'parent': 'october_monday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'october_sunday_0', 'parent': 'october_sunday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'october_saturday_0', 'parent': 'october_saturday', 'name': 'CHOCOLATE-DIPPED COOKIES & CREME'},
  {'value': 1, 'id': 'october_friday_2', 'parent': 'october_friday', 'name': 'CHOCOLATE HAZELNUT'},
  {'value': 1, 'id': 'october_thursday_2', 'parent': 'october_thursday', 'name': 'CHOCOLATE-DIPPED TOFFEE CRUNCH'},
  {'value': 1, 'id': 'october_tuesday_2', 'parent': 'october_tuesday', 'name': 'VANILLA CARAMEL GANACHE'},
  {'value': 1, 'id': 'october_saturday_1', 'parent': 'october_saturday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'october_thursday_3', 'parent': 'october_thursday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'october_wednesday_0', 'parent': 'october_wednesday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'october_tuesday_3', 'parent': 'october_tuesday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'october_monday_2', 'parent': 'october_monday', 'name': 'CHOCOLATE-DIPPED CARAMEL'},
  {'value': 1, 'id': 'october_saturday_2', 'parent': 'october_saturday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'october_friday_3', 'parent': 'october_friday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'october_wednesday_1', 'parent': 'october_wednesday', 'name': 'CHOCOLATE-DIPPED CARAMEL'},
  {'value': 1, 'id': 'september_tuesday_0', 'parent': 'september_tuesday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'september_sunday_0', 'parent': 'september_sunday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'september_saturday_0', 'parent': 'september_saturday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'september_thursday_0', 'parent': 'september_thursday', 'name': 'VANILLA CARAMEL GANACHE'},
  {'value': 1, 'id': 'september_wednesday_0', 'parent': 'september_wednesday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'september_friday_0', 'parent': 'september_friday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'september_thursday_1', 'parent': 'september_thursday', 'name': 'CHOCOLATE-DIPPED COCONUT'},
  {'value': 1, 'id': 'september_wednesday_1', 'parent': 'september_wednesday', 'name': 'CARAMEL HAZELNUT'},
  {'value': 1, 'id': 'september_tuesday_1', 'parent': 'september_tuesday', 'name': 'VANILLA CARAMEL GANACHE'},
  {'value': 1, 'id': 'september_sunday_1', 'parent': 'september_sunday', 'name': 'CHOCOLATE-DIPPED CARAMEL'},
  {'value': 1, 'id': 'september_friday_1', 'parent': 'september_friday', 'name': 'CHOCOLATE-DIPPED COOKIES & CREME'},
  {'value': 1, 'id': 'september_thursday_2', 'parent': 'september_thursday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'september_wednesday_2', 'parent': 'september_wednesday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'september_tuesday_2', 'parent': 'september_tuesday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'september_friday_2', 'parent': 'september_friday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'september_thursday_3', 'parent': 'september_thursday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'september_wednesday_3', 'parent': 'september_wednesday', 'name': 'CHOCOLATE-DIPPED CARAMEL'},
  {'value': 1, 'id': 'september_tuesday_3', 'parent': 'september_tuesday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'august_thursday_0', 'parent': 'august_thursday', 'name': 'CHOCOLATE-DIPPED TOFFEE CRUNCH'},
  {'value': 1, 'id': 'august_wednesday_0', 'parent': 'august_wednesday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'august_tuesday_0', 'parent': 'august_tuesday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'august_friday_0', 'parent': 'august_friday', 'name': 'CHOCOLATE-DIPPED BANANA'},
  {'value': 1, 'id': 'august_thursday_1', 'parent': 'august_thursday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'august_wednesday_1', 'parent': 'august_wednesday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'august_sunday_0', 'parent': 'august_sunday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'august_saturday_0', 'parent': 'august_saturday', 'name': 'CHOCOLATE-DIPPED BANANA'},
  {'value': 1, 'id': 'august_friday_1', 'parent': 'august_friday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'august_thursday_2', 'parent': 'august_thursday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'august_monday_0', 'parent': 'august_monday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'july_thursday_0', 'parent': 'july_thursday', 'name': 'CHOCOLATE-DIPPED TOFFEE CRUNCH'},
  {'value': 1, 'id': 'july_tuesday_0', 'parent': 'july_tuesday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'july_thursday_1', 'parent': 'july_thursday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'july_wednesday_0', 'parent': 'july_wednesday', 'name': 'CHOCOLATE-DIPPED CARAMEL'},
  {'value': 1, 'id': 'july_monday_0', 'parent': 'july_monday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'july_thursday_2', 'parent': 'july_thursday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'july_sunday_0', 'parent': 'july_sunday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'july_saturday_0', 'parent': 'july_saturday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'july_thursday_3', 'parent': 'july_thursday', 'name': 'CHOCOLATE-DIPPED TOFFEE CRUNCH'},
  {'value': 1, 'id': 'july_wednesday_1', 'parent': 'july_wednesday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'july_thursday_4', 'parent': 'july_thursday', 'name': 'CHOCOLATE-DIPPED COCONUT'},
  {'value': 1, 'id': 'june_sunday_0', 'parent': 'june_sunday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'june_friday_0', 'parent': 'june_friday', 'name': 'BLOND BANANA'},
  {'value': 1, 'id': 'june_wednesday_0', 'parent': 'june_wednesday', 'name': 'BANANA HAZELNUT'},
  {'value': 1, 'id': 'june_tuesday_0', 'parent': 'june_tuesday', 'name': 'VANILLA CARAMEL GANACHE'},
  {'value': 1, 'id': 'june_sunday_1', 'parent': 'june_sunday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'june_saturday_0', 'parent': 'june_saturday', 'name': 'CHOCOLATE-DIPPED BANANA'},
  {'value': 1, 'id': 'june_friday_1', 'parent': 'june_friday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'june_thursday_0', 'parent': 'june_thursday', 'name': 'CHOCOLATE-DIPPED TOFFEE CRUNCH'},
  {'value': 1, 'id': 'june_tuesday_1', 'parent': 'june_tuesday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'june_friday_2', 'parent': 'june_friday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'june_thursday_1', 'parent': 'june_thursday', 'name': 'BLOND BANANA'},
  {'value': 1, 'id': 'june_wednesday_1', 'parent': 'june_wednesday', 'name': 'BANANA HAZELNUT'},
  {'value': 1, 'id': 'june_monday_0', 'parent': 'june_monday', 'name': 'BLOND CHOCOLATE HAZELNUT'},
  {'value': 1, 'id': 'june_sunday_2', 'parent': 'june_sunday', 'name': 'BLOND BANANA'},
  {'value': 1, 'id': 'june_friday_3', 'parent': 'june_friday', 'name': 'CHOCOLATE-DIPPED BANANA'},
  {'value': 1, 'id': 'june_thursday_2', 'parent': 'june_thursday', 'name': 'VANILLA CARAMEL GANACHE'},
  {'value': 1, 'id': 'june_wednesday_2', 'parent': 'june_wednesday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'june_tuesday_2', 'parent': 'june_tuesday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'may_thursday_0', 'parent': 'may_thursday', 'name': 'CHOC-DIPPED COOKIES & CREME'},
  {'value': 1, 'id': 'may_tuesday_0', 'parent': 'may_tuesday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'may_saturday_0', 'parent': 'may_saturday', 'name': 'CARAMEL HAZELNUT'},
  {'value': 1, 'id': 'may_friday_0', 'parent': 'may_friday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'may_thursday_1', 'parent': 'may_thursday', 'name': 'VANILLA CARAMEL GANACHE'},
  {'value': 1, 'id': 'may_wednesday_0', 'parent': 'may_wednesday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'may_tuesday_1', 'parent': 'may_tuesday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'may_monday_0', 'parent': 'may_monday', 'name': 'CHOCOLATE PB SWIRL'},
  {'value': 1, 'id': 'may_sunday_0', 'parent': 'may_sunday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'may_thursday_2', 'parent': 'may_thursday', 'name': 'CHOC-DIPPED TOFFEE CRUNCH'},
  {'value': 1, 'id': 'may_tuesday_2', 'parent': 'may_tuesday', 'name': 'CHOC-DIPPED COOKIES & CREME'},
  {'value': 1, 'id': 'may_saturday_1', 'parent': 'may_saturday', 'name': 'CHOCOLATE-DIPPED RASPBERRY'},
  {'value': 1, 'id': 'may_thursday_3', 'parent': 'may_thursday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'may_wednesday_1', 'parent': 'may_wednesday', 'name': 'CARAMEL HAZELNUT'},
  {'value': 1, 'id': 'may_tuesday_3', 'parent': 'may_tuesday', 'name': 'VANILLA CARAMEL GANACHE'},
  {'value': 1, 'id': 'may_sunday_1', 'parent': 'may_sunday', 'name': 'CHOCOLATE-DIPPED RASPBERRY'},
  {'value': 1, 'id': 'may_saturday_2', 'parent': 'may_saturday', 'name': 'CARAMEL HAZELNUT'},
  {'value': 1, 'id': 'may_friday_1', 'parent': 'may_friday', 'name': 'CHOCOLATE PB SWIRL'},
  {'value': 1, 'id': 'may_thursday_4', 'parent': 'may_thursday', 'name': 'CHOCOLATE-DIPPED COCONUT'},
  {'value': 1, 'id': 'april_wednesday_0', 'parent': 'april_wednesday', 'name': 'CHOCOLATE-DIPPED CHERRY'},
  {'value': 1, 'id': 'april_thursday_0', 'parent': 'april_thursday', 'name': 'CHOC-DIPPED TOFFEE CRUNCH'},
  {'value': 1, 'id': 'april_wednesday_1', 'parent': 'april_wednesday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'april_tuesday_0', 'parent': 'april_tuesday', 'name': 'VANILLA CARAMEL HAZELNUT'},
  {'value': 1, 'id': 'april_thursday_1', 'parent': 'april_thursday', 'name': 'CHOCOLATE HAZELNUT'},
  {'value': 1, 'id': 'april_wednesday_2', 'parent': 'april_wednesday', 'name': 'CHOCOLATE-DIPPED CARAMEL'},
  {'value': 1, 'id': 'april_monday_0', 'parent': 'april_monday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'april_sunday_0', 'parent': 'april_sunday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'april_saturday_0', 'parent': 'april_saturday', 'name': 'CHOCOLATE-DIPPED COCONUT'},
  {'value': 1, 'id': 'april_thursday_2', 'parent': 'april_thursday', 'name': 'CHOCOLATE-DIPPED TOFFEE CRUNCH'},
  {'value': 1, 'id': 'april_wednesday_3', 'parent': 'april_wednesday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'april_saturday_1', 'parent': 'april_saturday', 'name': 'CHOC-DIPPED COOKIES & CREME'},
  {'value': 1, 'id': 'april_friday_0', 'parent': 'april_friday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'april_tuesday_1', 'parent': 'april_tuesday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'march_monday_0', 'parent': 'march_monday', 'name': 'CHOC-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'march_saturday_0', 'parent': 'march_saturday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'march_sunday_0', 'parent': 'march_sunday', 'name': 'CHOCOLATE-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'march_saturday_1', 'parent': 'march_saturday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'march_friday_0', 'parent': 'march_friday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'march_thursday_0', 'parent': 'march_thursday', 'name': 'VANILLA CARAMEL GANACHE'},
  {'value': 1, 'id': 'march_wednesday_0', 'parent': 'march_wednesday', 'name': 'CHOC MARSHMALLOW GANACHE'},
  {'value': 1, 'id': 'march_tuesday_0', 'parent': 'march_tuesday', 'name': 'CHOCOLATE-DIPPED CHERRY'},
  {'value': 1, 'id': 'march_saturday_2', 'parent': 'march_saturday', 'name': 'CHOCOLATE HAZELNUT'},
  {'value': 1, 'id': 'march_thursday_1', 'parent': 'march_thursday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'march_tuesday_1', 'parent': 'march_tuesday', 'name': 'CHOC MARSHMALLOW GANACHE'},
  {'value': 1, 'id': 'march_saturday_3', 'parent': 'march_saturday', 'name': 'CHOC-DIPPED COOKIES & CREME'},
  {'value': 1, 'id': 'march_friday_1', 'parent': 'march_friday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'march_thursday_2', 'parent': 'march_thursday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'march_monday_1', 'parent': 'march_monday', 'name': 'CHOC MARSHMALLOW GANACHE'},
  {'value': 1, 'id': 'february_sunday_0', 'parent': 'february_sunday', 'name': 'CHOC-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'february_friday_0', 'parent': 'february_friday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'february_thursday_0', 'parent': 'february_thursday', 'name': 'CHOC-DIPPED TOFFEE CRUNCH'},
  {'value': 1, 'id': 'february_wednesday_0', 'parent': 'february_wednesday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'february_tuesday_0', 'parent': 'february_tuesday', 'name': 'CHOCOLATE HAZELNUT'},
  {'value': 1, 'id': 'february_friday_1', 'parent': 'february_friday', 'name': "VALENTINE'S SURPRISE"},
  {'value': 1, 'id': 'february_wednesday_1', 'parent': 'february_wednesday', 'name': 'CHOC MARSHMALLOW GANACHE'},
  {'value': 1, 'id': 'february_sunday_1', 'parent': 'february_sunday', 'name': 'CHOC-DIPPED STRAWBERRY'},
  {'value': 1, 'id': 'february_saturday_0', 'parent': 'february_saturday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'february_friday_2', 'parent': 'february_friday', 'name': 'CHOC MARSHMALLOW GANACHE'},
  {'value': 1, 'id': 'february_wednesday_2', 'parent': 'february_wednesday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'february_monday_0', 'parent': 'february_monday', 'name': 'CHOC MARSHMALLOW GANACHE'},
  {'value': 1, 'id': 'february_sunday_2', 'parent': 'february_sunday', 'name': 'CHOC STRAWBERRY GANACHE'},
  {'value': 1, 'id': 'february_saturday_1', 'parent': 'february_saturday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'january_friday_0', 'parent': 'january_friday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'january_thursday_0', 'parent': 'january_thursday', 'name': 'CHOC-DIPPED TOFFEE CRUNCH'},
  {'value': 1, 'id': 'january_tuesday_0', 'parent': 'january_tuesday', 'name': 'VANILLA CARAMEL GANACHE'},
  {'value': 1, 'id': 'january_monday_0', 'parent': 'january_monday', 'name': 'CARAMEL HAZELNUT'},
  {'value': 1, 'id': 'january_saturday_0', 'parent': 'january_saturday', 'name': 'CHOCOLATE PB GANACHE'},
  {'value': 1, 'id': 'january_friday_1', 'parent': 'january_friday', 'name': 'CHOCOLATE-DIPPED CARAMEL'},
  {'value': 1, 'id': 'january_thursday_1', 'parent': 'january_thursday', 'name': 'CHOCOLATE-DIPPED VANILLA'},
  {'value': 1, 'id': 'january_wednesday_0', 'parent': 'january_wednesday', 'name': 'CHOC STRAWBERRY GANACHE'},
  {'value': 1, 'id': 'january_monday_1', 'parent': 'january_monday', 'name': 'CHOCOLATE MINT GANACHE'},
  {'value': 1, 'id': 'january_friday_2', 'parent': 'january_friday', 'name': 'CHOCOLATE CUBED'},
  {'value': 1, 'id': 'january_thursday_2', 'parent': 'january_thursday', 'name': 'CHOC-DIPPED TOFFEE CRUNCH'},
  {'value': 1, 'id': 'january_wednesday_1', 'parent': 'january_wednesday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'january_friday_3', 'parent': 'january_friday', 'name': 'VANILLA CARAMEL GANACHE'},
  {'value': 1, 'id': 'january_wednesday_2', 'parent': 'january_wednesday', 'name': 'CHOC STRAWBERRY SURPRISE'},
  {'value': 1, 'id': 'january_tuesday_1', 'parent': 'january_tuesday', 'name': 'CHOC MARSHMALLOW SURPRISE'},
  {'value': 1, 'id': 'january_sunday_0', 'parent': 'january_sunday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'january_wednesday_3', 'parent': 'january_wednesday', 'name': "NEW YEAR'S SURPRISE"},
  {'value': 1, 'id': 'december_tuesday_0', 'parent': 'december_tuesday', 'name': "NEW YEAR'S EVE SURPRISE"},
  {'value': 1, 'id': 'december_tuesday_1', 'parent': 'december_tuesday', 'name': 'CHRISTMAS SURPRISE'},
  {'value': 1, 'id': 'december_saturday_0', 'parent': 'december_saturday', 'name': 'CHOC-DIPPED COOKIES & CREME'},
  {'value': 1, 'id': 'december_thursday_0', 'parent': 'december_thursday', 'name': 'CHOCOLATE BANANA HAZELNUT'},
  {'value': 1, 'id': 'december_tuesday_2', 'parent': 'december_tuesday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'december_friday_0', 'parent': 'december_friday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'december_thursday_1', 'parent': 'december_thursday', 'name': 'CHOC-DIPPED CHOC BANANA'},
  {'value': 1, 'id': 'december_sunday_0', 'parent': 'december_sunday', 'name': 'CHOCOLATE CARAMEL GANACHE'},
  {'value': 1, 'id': 'december_saturday_1', 'parent': 'december_saturday', 'name': 'CHOC-DIPPED CHOCOLATE CHIP'},
  {'value': 1, 'id': 'december_friday_1', 'parent': 'december_friday', 'name': 'VANILLA HAZELNUT'},
  {'value': 1, 'id': 'december_thursday_2', 'parent': 'december_thursday', 'name': 'CHOCOLATE BANANA HAZELNUT'},
  {'value': 1, 'id': 'december_monday_0', 'parent': 'december_monday', 'name': 'CHOCOLATE GANACHE SURPRISE'},
  {'value': 1, 'id': 'november_monday_1', 'parent': 'november_monday', 'name': 'BANANA HAZELNUT'},
  {'value': 1, 'id': 'november_sunday_1', 'parent': 'november_sunday', 'name': 'CHOCOLATE GANACHE SURPRISE'}
];

var treemap_model = new TreemapModel({
  data: data
});
var treemap_view = new TreemapView({
  model: treemap_model,
  el: '#treemap-container'
});
var breadcrumb_view = new BreadcrumbView({
  el: '#breadcrumbs',
  treemap_model: treemap_model
});
}

export default treeChart;