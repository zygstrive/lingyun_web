<template>
  <div class="bg999">
    <div class="content">
      <div class="title-text">总部口径 <span class="icon1">▼</span></div>
      <div class="content-left">
        <div class="content-left-top">
          <div>
            <p>累计增收</p>
            <div class="size-1">
              {{ form.Network.Cumulative_Income }}
              <span class="color-1"> 亿元</span>
            </div>
          </div>
          <div>
            <p>年度完成率</p>
            <div class="size-1">
              {{ form.Network.Completion_Rate_Year }}
              <span class="size-7">%</span>
            </div>
          </div>
          <div>
            <p>全国排名</p>
            <div class="color-1">第<span class="size-1">{{ form.Network.Cumulative_Country }}</span>名</div>
          </div>
          <div>
            <p>南方排名</p>
            <div class="color-1">第<span class="size-1">{{ form.Network.Cumulative_South }}</span>名</div>
          </div>
        </div>
        <div class="content-left-bottom">
          <div class="top-1">
            <p>拍照用户用保率</p>
            <div class="size-2">
              {{ form.Photograph_Utilization_Rate.Utilization_Rate }}
              <span class="size-7">%</span>
            </div>
          </div>
          <div class="left-1">
            <p>全国排名</p>
            <div class="color-1">第<span class="size-1" >{{ form.Photograph_Utilization_Rate.Utilization_Country }}</span>名</div>
          </div>
          <div class="right-1">
            <p>南方排名</p>
            <div class="color-1">第<span class="size-1" >{{ form.Photograph_Utilization_Rate.Utilization_South }}</span>名</div>
          </div>
        </div>
      </div>
      <div class="content-center">
        <div class="center-1">
          <p class="color-2">累计出账收入</p>
          <div class="size-2">
            {{ form.Network.Cumulative_Account }}
            <span class="size-3"> 亿元</span>
          </div>
        </div>
        <div class="bg-center"></div>
        <div class="center-1">
          <p class="color-2">累计同比</p>
          <div class="size-4">
            {{ form.Network.Cumulative_Rate }}
            <span class="size-5"> 亿元</span>
          </div>
        </div>
      </div>
      <div class="content-right">
        <div class="content-right-top">
          <div class="top-1">
            <p>拍照用户收保率</p>
            <div class="size-2">
              {{ form.Photograph_Coverage_Rate.Coverage_Rate }}
              <span class="size-7">%</span></div>
          </div>
          <div class="left-1">
            <p>全国排名</p>
            <div class="color-1">第<span class="size-1" >{{ form.Photograph_Coverage_Rate.Coverage_Country }}</span>名</div>
          </div>
          <div class="right-1">
            <p>南方排名</p>
            <div class="color-1">第<span class="size-1" >{{ form.Photograph_Coverage_Rate.Coverage_South }}</span>名</div>
          </div>
        </div>
        <div class="content-right-top">
          <div class="top-1">
            <p>流失率</p>
            <div class="size-2">
              {{ form.Loss.Loss_Rate }}
              <span class="size-7">%</span></div>
          </div>
          <div class="left-1">
            <p>全国排名</p>
            <div class="color-1">第<span class="size-1" >{{ form.Loss.Loss_Country }}</span>名</div>
          </div>
          <div class="right-1">
            <p>南方排名</p>
            <div class="color-1">第<span class="size-1" >{{ form.Loss.Loss_South }}</span>名</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { querybyBusinessTypeNetWork } from '@/api/bigscreen.js'
  export default {
    name: 'components1',
    data(){
      return{
        form: {
          Network: {
            Cumulative_Income: '',
            Completion_Rate_Year: '',
            Cumulative_Country: '',
            Cumulative_South: '',
            Cumulative_Account: '',
            Cumulative_Rate: '',
          },
          Photograph_Coverage_Rate: {
            Coverage_Rate: '',
            Coverage_Country: '',
            Coverage_South: ''
          },
          Photograph_Utilization_Rate: {
            Utilization_Rate: '',
            Utilization_Country: '',
            Utilization_South: ''
          },
          Loss: {
            Loss_Rate: '',
            Loss_Country: '',
            Loss_South: ''
          }
        },
        param: {
          businessType: "Network_Account"
        },
        params: {
          businessType: "NPhotograph_Rate"
        },
        parameter: {
          businessType: "NUtilization_Rate"
        },
        paramts: {
          businessType: "NLoss_Rate"
        }
      }
    },
    mounted() {
      this.getData();
    },
    methods:{
      getData(){
        querybyBusinessTypeNetWork(this.param).then(res => {
          if(res.rspCode === '0000'){
            let {result} = res
            this.form.Network.Cumulative_Income = result.revenue
            this.form.Network.Completion_Rate_Year = result.completionRate
            this.form.Network.Cumulative_Country = result.country
            this.form.Network.Cumulative_South = result.south
            this.form.Network.Cumulative_Account = result.account
            this.form.Network.Cumulative_Rate = result.accountRate
          }
        })

        querybyBusinessTypeNetWork(this.params).then(res => {
          if(res.rspCode === '0000'){
            let {result} = res
            this.form.Photograph_Coverage_Rate.Coverage_Rate = result.rate
            this.form.Photograph_Coverage_Rate.Coverage_Country = result.country
            this.form.Photograph_Coverage_Rate.Coverage_South = result.south
          }
        })

        querybyBusinessTypeNetWork(this.parameter).then(res => {
            if(res.rspCode === '0000'){
              let {result} = res
              this.form.Photograph_Utilization_Rate.Utilization_Rate = result.rate
              this.form.Photograph_Utilization_Rate.Utilization_Country = result.country
              this.form.Photograph_Utilization_Rate.Utilization_South = result.south
            }
        })

        querybyBusinessTypeNetWork(this.paramts).then(res => {
           if(res.rspCode === '0000'){
             let {result} = res
             this.form.Loss.Loss_Rate = result.rate
             this.form.Loss.Loss_Country = result.country
             this.form.Loss.Loss_South = result.south
           }
        })
      }
    }
  }

</script>

<style lang='scss' scoped>
  .bg999{
    height: 100%;
    background-size: 100% 100%;
  }
  .title-text{
    font-size:36px;
    width: 100%;
    height: 40px;
    font-family: PangMenZhengDaoBiaoTiTi;
    color:#33FFFF;
    padding-left: 48px;
    padding-top:68px;
    .icon1{
      font-size: 26px;
    }
  }
  .color-1{
    color:#F6FF00;
    font-family: YouSheBiaoTiHei;
    font-size: 36px;
  }
  .size-1{
    font-size:42px;
    font-family: DigifaceWide;
    color:#F6FF00;
  }
  .size-2{
    color:#F6FF00;
    font-family: DigifaceWide;
    font-size: 42px;
  }
  .size-3{
    font-size:36px;
    font-family:YouSheBiaoTiHei;
  }
  .size-4{
    color: #FF4C7A;
    font-family: DigifaceWide;
    font-size: 38px;
  }
  .size-5{
    font-size:30px;
    font-family:YouSheBiaoTiHei;
  }
  .size-6{
    font-size:24px;
  }
  .size-7{
    font-size: 30px;
  }
  .color-2{
    color:#33FFFF;
    font-size: 30px;
    margin: 0;
  }
  .center-1{
    text-align: center;
  }

  .content{
    width: 1891px;
    height: 976px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/border1.png");
    background-size: 100% 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0 auto;
    .content-left{
      width: 668.6px;
      >div{
        width: 100%;
        height: 351px;
        margin-bottom:32px;
        background-image: url("../../../../assets/images/bigScreen/ecologyOperations/border2.png");
        background-size: 100% 100%;
      }
      .content-left-top{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;


        >div{
          width: 50%;
          height: 50%;
          text-align: center;
          p{
            color:#00FFFF;
            font-size: 30px;
            font-family: 'MicrosoftYaHei';
            margin:0px;
            padding-top:36px;
          }


        }
      }
      .content-left-bottom{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        >div{
          text-align: center;
          p{
            color:#00FFFF;
            font-size: 30px;
            margin: 0;
          }
        }
        .top-1{
          width: 100%;
        }
        .left-1{
          width: 50%;
        }
        .right-1{
          width: 50%;
        }

      }
    }
    .content-center{
      width: 499px;
      height: 730px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      .bg-center{
        width: 100%;
        height: 500px;
        background-image: url("../../../../assets/images/bigScreen/ecologyOperations/qgfw.png");
        background-size: 100% 100%;
      }
    }
    .content-right{
      width: 668.6px;
      >div{
        width: 100%;
        height: 351px;
        margin-bottom:32px;
        background-image: url("../../../../assets/images/bigScreen/ecologyOperations/border2.png");
        background-size: 100% 100%;
      }
      .content-right-top{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        >div{
          text-align: center;
          p{
            color:#00FFFF;
            font-size: 30px;
            margin: 0;
          }
        }
        .top-1{
          width: 100%;
        }
        .left-1{
          width: 50%;
        }
        .right-1{
          width: 50%;
        }
      }
    }
  }
</style>