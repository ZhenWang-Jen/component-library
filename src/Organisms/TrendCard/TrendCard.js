import React from "react";
import startsWith from "lodash/startsWith";
import { Card, Grid } from "semantic-ui-react";
import enumerate from "../../utils/enumerate";
import prettifyNumber from "../../utils/prettifyNumber";
import parseTrendData from "../../utils/parseTrendData";

import ComparisonCard from "../ComparisonCard/ComparisonCard";
import comparisonSparkLineChart from "../ComparisonCard/configs/sparkLineChartConfig"
import Icon from "../../Atoms/Icon";
import Loader from "../../Atoms/Loader";
import ToolTip from "../../Atoms/ToolTip";
import "./TrendCard.scss";
import Colors from "../../utils/colors";

class TrendCard extends React.Component {
  render() {
    const { hasError, isFetching, data, index } = this.props;

    const colors = Colors.trendCard;

    let cardColor;
    if (index < colors.length) {
      cardColor = colors[index];
    } else {
      cardColor = Colors.warning;
    }
    
    if (isFetching || !data) {
      return (
        <Card fluid className="TrendCard--error-card" style={{ borderTop: '5px solid ' + cardColor }}>
          <Loader>Loading</Loader>
        </Card>  
      );
    }

    if ( this.props.data.data === undefined || hasError ) {
      return (
        <Card fluid className="TrendCard--error-card" style={{ borderTop: '5px solid ' + cardColor }}>
          <div className="TrendCard--error-warn" >
            <ToolTip iconName={'warning sign'} iconColor={'yellow'} infoText={'Some data cannot be displayed at this time.'} />
            <span>Data is not available at this time.</span>
          </div>
        </Card>
      ); 
    }

    const trendCardData = parseTrendData(this.props.data.data);

    let chevronIconName = "";
    let differenceOverTime = Math.round((trendCardData.trend.value - trendCardData.trend.compareWith) * 100 / trendCardData.trend.compareWith);
    if (differenceOverTime == 0) {
      differenceOverTime = "No Change";
      chevronIconName = "window minimize";
    } else if (differenceOverTime < 0) {
      differenceOverTime = "Decreased " + (-differenceOverTime);
      chevronIconName = "chevron down";
    } else {
      differenceOverTime = "Increased " + differenceOverTime;
      chevronIconName = "chevron up";
    }

    comparisonSparkLineChart.config.series = trendCardData.chartData;
    //comparisonSparkLineChart.config.colors = cardColor;

    return (
      <Card fluid style={{ borderTop: '5px solid ' + cardColor}} id={this.props.ids && this.props.ids.trendCard ? this.props.ids.trendCard : null}>
        <Grid style={{margin: 0}}>
          <Grid.Row style={{padding: '5px 0px'}}>
            <Grid.Column width={14} style={{paddingRight: 5}}>
              <Card.Header id={this.props.ids && this.props.ids.trendCardHDR ? this.props.ids.trendCardHDR : null}>{trendCardData.title}</Card.Header>
              <Card.Meta id={this.props.ids && this.props.ids.trendCardSubHDR ? this.props.ids.trendCardSubHDR : null}>{enumerate("TIME_RANGE", trendCardData.trend.timeRange)}</Card.Meta>
                {trendCardData.error && (    
                  <ToolTip iconName={'warning sign'} iconColor={'yellow'} infoText={'Some data cannot be displayed at this time.'} />
                )}
            </Grid.Column>
            <Grid.Column width={2} floated="right">
              <ToolTip infoText={trendCardData.infoText} className="float-right margin0" ids={this.props.ids && this.props.ids.trendCardInfoIcon ? this.props.ids.trendCardInfoIcon: null} />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid divided='vertically' className="gridBody">
          <Grid.Row columns={3} verticalAlign={'middle'} style={{padding: 0}}>
            <Grid.Column id={this.props.ids && this.props.ids.trendCardGraphContainer ? this.props.ids.trendCardGraphContainer: null} >
              <ComparisonCard
                data={comparisonSparkLineChart}
                calendarDefault={3}
                chartType={'sparkLine'}
                color={cardColor}
              />
            </Grid.Column>
            
            <Grid.Column>
              <div className="primaryValue" 
                   id={this.props.ids && this.props.ids.trendCardPrimaryValue ? this.props.ids.trendCardPrimaryValue: null}>
                  {prettifyNumber(
                    trendCardData.trend.value,
                    trendCardData.trend.valueType
                  )}
                </div>
                <div style={{marginTop: '9px'}}>
                  <Icon name={chevronIconName} className={'stats--chevronIcon float-left'} />
                  <div className="secondaryVaule" 
                       id={this.props.ids && this.props.ids.trendCardChangeSince ? this.props.ids.trendCardChangeSince: null}>
                    {`${differenceOverTime}% ` + trendCardData.trend.since}
                  </div>
                </div>
            </Grid.Column>
            
            <Grid.Column>
              <div className="status">
                {(trendCardData.stats !== undefined) && trendCardData.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="primaryStats" 
                         id={this.props.ids && this.props.ids.trendCardPrimaryStatsValue ? `${this.props.ids.trendCardPrimaryStatsValue}-${index+1}`: null}>
                      {prettifyNumber(stat.value, stat.value_type)}
                    </div>
                    <div className="secondaryStats" 
                         id={this.props.ids && this.props.ids.trendCardSecondaryStatsLabel ? `${this.props.ids.trendCardSecondaryStatsLabel}-${index+1}`: null}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    );
  }
}

export default TrendCard;