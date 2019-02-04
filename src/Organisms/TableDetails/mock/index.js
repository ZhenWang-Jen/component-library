export default {
  columns: [
    {
      title: 'Plan Year',
      field: 'planYear'
    },
    {
      title: 'Start Date',
      field: 'startDate'
    },
    {
      title: 'End Date',
      field: 'endDate'
    },
    {
      title: 'OE Start Date',
      field: 'oeStartDate'
    },
    {
      title: 'OE End Date',
      field: 'oeEndDate'
    },
    {
      title: 'Total Lines',
      field: 'totalLines'
    },
    {
      title: 'Total Benefits',
      field: 'totalBenefits'
    },
    {
      title: 'Total Participants',
      field: 'totalParticipants'
    },
    {
      title: 'Total Premium',
      field: 'totalPremium'
    },
    {
      title: '% Of Participation',
      field: 'percentOfParticipation'
    },
    {
      title: 'Primary Year Plan',
      field: 'primaryYearPlan'
    }
  ],
  subColumns: [
    { title: "Benefit Classification", field: "benefitClassification" },
    { title: "Benefit Name", field: "benefitName" },
    { title: "Total Eligible", field: "totalEligible" },
    { title: "Total Enrolled", field: "totalEnrolled" },
    { title: "Participation %", field: "participationPercentage" },
    { title: "Total Paid Premium", field: "totalPaidPremium" },
    { title: "Original Effective Date", field: "originalEffectiveDate" }
  ],
  data: [
    {
      groupName: 'Burton & Burton',
      clientId: 2,
      brokerId: '0',
      brokerName: null,
      clientStatus: 'Non-Active',
      actualGoLiveDate: '04/01/2016',
      totalLives: 12345,
      totalBenefitsEligible: 12345,
      totalParticipation: 11193,
      totalPremium: 1678950,
      percentOfParticipation: 91,
      totalLines: 5,
      plan_year_history: [
        {
          planYear: 2016,
          currentPlanYear: false,
          startDate: '1/1/2016',
          endDate: '12/21/2016',
          oeStart: '11/1/2015',
          oeEndDate: '11/30/2015',
          totalLines: 2,
          totalBenefits: 500,
          totalParticipants: 11193,
          totalPremium: 1678950,
          percentOfParticipation: '91%',
          primaryYearPlan: 'TRUE',
          subData: [
            {  
              title: 'Benefit Classification',
              data: 'Basic Employee Life',
              data1: 'Basic Long Term Disability'
            },
            {  
              title: 'Benefit Name',
              data: 'Employer Paid Life Term',
              data1: 'Employer Paid Life Term'
            },
            {  
              title: 'Total Eligible',
              data: 506,
              data1: 506
            },
            {  
              title: 'Total Enrolled',
              data: 402,
              data1: 402
            },
            {  
              title: 'Participation %',
              data: '99%',
              data1: '99%'
            },
            {  
              title: 'Total Paid Premium',
              data: '$18,886.19',
              data1: '$9,532.33'
            },
            {  
              title: 'Original Effective Date',
              data: '7/30/2015',
              data1: '7/30/2015'
            },
          ]
        },
        {
          planYear: 2017,
          currentPlanYear: false,
          startDate: '1/1/2017',
          endDate: '12/21/2017',
          oeStart: '11/1/2016',
          oeEndDate: '11/30/2016',
          totalLines: 2,
          totalBenefits: 500,
          totalParticipants: 11193,
          totalPremium: 1678950,
          percentOfParticipation: '91%',
          primaryYearPlan: 'TRUE',
          subData: [
            {  
              title: 'Benefit Classification',
              data: 'Basic Employee Life',
              data1: 'Basic Long Term Disability'
            },
            {  
              title: 'Benefit Name',
              data: 'Employer Paid Life Term',
              data1: 'Employer Paid Life Term'
            },
            {  
              title: 'Total Eligible',
              data: 506,
              data1: 506
            },
            {  
              title: 'Total Enrolled',
              data: 402,
              data1: 402
            },
            {  
              title: 'Participation %',
              data: '99%',
              data1: '99%'
            },
            {  
              title: 'Total Paid Premium',
              data: '$18,886.19',
              data1: '$9,532.33'
            },
            {  
              title: 'Original Effective Date',
              data: '7/30/2015',
              data1: '7/30/2015'
            },
          ]
        },
        {
          planYear: 2018,
          currentPlanYear: true,
          startDate: '1/1/2018',
          endDate: '12/21/2018',
          oeStart: '11/1/2017',
          oeEndDate: '11/30/2017',
          totalLines: 2,
          totalBenefits: 500,
          totalParticipants: 11193,
          totalPremium: 1678950,
          percentOfParticipation: '91%',
          primaryYearPlan: 'TRUE',
          subData: [
            {  
              title: 'Benefit Classification',
              data: 'Basic Employee Life',
              data1: 'Basic Long Term Disability'
            },
            {  
              title: 'Benefit Name',
              data: 'Employer Paid Life Term',
              data1: 'Employer Paid Life Term'
            },
            {  
              title: 'Total Eligible',
              data: 506,
              data1: 506
            },
            {  
              title: 'Total Enrolled',
              data: 402,
              data1: 402
            },
            {  
              title: 'Participation %',
              data: '99%',
              data1: '99%'
            },
            {  
              title: 'Total Paid Premium',
              data: '$18,886.19',
              data1: '$9,532.33'
            },
            {  
              title: 'Original Effective Date',
              data: '7/30/2015',
              data1: '7/30/2015'
            },
          ]
        }
      ]
    }
  ],
  totalPages: 10
};
