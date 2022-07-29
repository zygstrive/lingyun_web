# ExcelJS

读取，操作并写入电子表格数据和样式到 XLSX 和 JSON 文件。

一个 Excel 电子表格文件逆向工程项目。

官方文档:https://github.com/exceljs/exceljs/blob/HEAD/README_zh.md#%E5%86%99-xlsx

# 安装

```
npm install exceljs
```

如果你使用 yarn 则：

```
yarn add exceljs
```

# 导出xlsx加水印

## **1、引入ExcelJS**

```javascript
import ExcelJS from "exceljs";
```

## **2、创建工作簿并设置工作簿属性**

```javascript
// 创建工作簿
const workbook = new ExcelJS.Workbook();
// 获取水印
const base64 = setWatermark(staff);
const imageId1 = workbook.addImage({ base64, extension: 'png' });
// 添加工作表
const worksheet = workbook.addWorksheet(sheetName);
// 生成 columns
const columns = header.map((col) => ({ name: col.v }));
// 生成 rows
const rows = data.map((row) => {
  return header.map(itm => isNull(row[itm.k]) ? row[itm.k] : '');
});
// 添加背景图片
worksheet.addBackgroundImage(imageId1);
// 添加数据
worksheet.addTable({
  name: filename,
  ref: 'A1',// 表格左上角位置
  columns,
  rows
});
//判断该数据是否为空
const isNull = (data) => {
  return (data ?? '') !== '';
}
```

## **3、绘画水印**

```javascript
const setWatermark = (str) => {
  // 创建一个画布
  let can = document.createElement('canvas');
  // 设置画布的长宽
  can.width = 550;
  can.height = 350;
  let cans = can.getContext('2d')
  // 旋转角度
  cans.rotate(-25 * Math.PI / 180);
  // 设置字体大小
  cans.font = "800 40px Microsoft JhengHei";
  // 设置填充绘画的颜色、渐变或者模式
  cans.fillStyle = "rgba(130, 142, 162, 0.2)";
  // 设置文本内容的当前对齐方式
  cans.textAlign = 'center';
  // 设置在绘制文本时使用的当前文本基线
  cans.textBaseline = 'Middle';
  // str为设置绘制的文字
  cans.fillText(str, 180, 350);
  //canvas对象转换为base64位编码
  const dataURL = can.toDataURL('image/png');
  return dataURL;
}
```

## **4、导出xlsx**

```javascript
// 写入 buffer
workbook.xlsx.writeBuffer().then((res) => {
  //使用Blob函数将普通数据生成blob数据对象
  saveAs(new Blob([res], {type: "application/octet-stream"}), filename + '.' + "xlsx" );
});
```



## **5、saveAs 将blob数据对象转成链接下载**

```javascript
// 导出excel
export function saveAs(obj, fileName) {
  let tmpa = document.createElement("a");
  tmpa.download = fileName || "下载";
  //将blob数据对象转成链接下载
  tmpa.href = URL.createObjectURL(obj); //绑定a标签
  tmpa.click(); //模拟点击实现下载
  setTimeout(function () { //延时释放
    URL.revokeObjectURL(obj); //用URL.revokeObjectURL()来释放这个object URL
  }, 100);
};
```



## **6、完整代码**

```javascript
import {createWsSheet} from "@/pages/Report/util/sheetWaterMaker";

columns= [
    {
      title: '订单号',
      dataIndex: 'orderId',
    },
    {
      title: '下单时间',
      dataIndex: 'orderTime',
    },
    {
      title: '地市',
      dataIndex: 'eparchyName',
    },
    {
      title: '下单号码',
      dataIndex: 'orderNumber',
    },
    {
      title: 'cb工号',
      dataIndex: 'cbNumber',
    },
    {
      title: '渠道编码',
      dataIndex: 'channelNumber',
    },
    {
      title: '业务号码',
      dataIndex: 'busiNumber',
    },
    {
      title: '产商品ID',
      dataIndex: 'commId',
    },
    {
      title: '产商品名称',
      dataIndex: 'commName',
    },
    {
      title: '订单状态',
      dataIndex: 'status',
    },
    {
      title: '物流单号',
      dataIndex: 'postCompanyCode',
    },
    {
      title: '物流配送地址',
      dataIndex: 'orderAddress',
    },
    {
      title: '报错信息',
      dataIndex: 'reason',
    }
  ];

export = (dataArr) => {
  const baseHeader = this.columns.map(item=>{
    return{v:item.title,k:item.dataIndex}
  });
  createWsSheet(
    baseHeader,  //表头
    dataArr.data, //导出的数据
    "代客下单订单报表", //导出的文件名
    "代客下单订单报表" , //sheet名字
    null, //导出多个工作表
    '2022-07-27' //水印名称
  );
};
```

sheetWaterMaker.js

```javascript
import {message as Message} from "antd/lib/index";
import ExcelJS from "exceljs";
import { saveAs} from "@/pages/Report/util/reportUtil"

export const createWsSheet = (
  header,
  data,
  filename,
  sheetName ,
  params,
  staff,
) => {

  Message.loading('正在导出...');
  if (!((header && data) && (header.length && data.length))) {
    Message.error('导出失败');
    return;
  }
  // 创建工作簿
  const workbook = new ExcelJS.Workbook();
  // 获取水印
  const base64 = setWatermark(staff);
  const imageId1 = workbook.addImage({ base64, extension: 'png' });
  // 创建带有红色标签颜色的工作表
  const worksheet = workbook.addWorksheet(sheetName);
  // 生成 columns
  const columns = header.map((col) => ({ name: col.v }));
  // 生成 rows
  const rows = data.map((row) => {
    return header.map(itm => isNull(row[itm.k]) ? row[itm.k] : '');
  });
  // 添加背景图片
  worksheet.addBackgroundImage(imageId1);
  // 添加数据
  worksheet.addTable({
    name: filename,
    ref: 'A1',// 表格左上角位置
    columns,
    rows
  });
  // 多工作表
  if (params && params.length) {
    params.forEach((el) => {
      if (!((el.header && el.data) && (el.header.length && el.data.length))) {
        Message.error('导出失败');
        return;
      }
      const worksheetM = workbook.addWorksheet(el.sheetName);
      // 生成 columns
      const columnsM = el.header.map((col) => ({ name: col.v }));
      // 生成 rows
      const rowsM = el.data.map((row) => {
        return el.header.map(itm => isNull(row[itm.k]) ? row[itm.k] : '');
      });
      // 添加背景图片
      worksheetM.addBackgroundImage(imageId1);
      // 添加数据
      worksheetM.addTable({
        name: el.sheetName,
        ref: 'A1',// 表格左上角位置
        columns: columnsM,
        rows: rowsM
      });
    })
  }

  workbook.xlsx.writeBuffer().then((res) => {
    // saveAs(new Blob([res], { type: 'application/octet-stream' }), filename)
    saveAs(new Blob([res], {type: "application/octet-stream"}), filename + '.' + "xls" );
  });
  Message.success('导出成功');
};


/**
 * 判断该数据是否为空
 * @param data 要判断的数据
 * @returns 布尔值:true/false
 */
const isNull = (data) => {
  return (data ?? '') !== '';
}

/**
 * 绘画水印
 * @param str 要做出水印的文字
 * @returns Base64
 */
const setWatermark = (str) => {
  // 创建一个画布
  let can = document.createElement('canvas');
  // 设置画布的长宽
  can.width = 550;
  can.height = 350;
  let cans = can.getContext('2d')
  // 旋转角度
  cans.rotate(-25 * Math.PI / 180);
  // 设置字体大小
  cans.font = "800 40px Microsoft JhengHei";
  // 设置填充绘画的颜色、渐变或者模式
  cans.fillStyle = "rgba(130, 142, 162, 0.2)";
  // 设置文本内容的当前对齐方式
  cans.textAlign = 'center';
  // 设置在绘制文本时使用的当前文本基线
  cans.textBaseline = 'Middle';
  // str为设置绘制的文字
  cans.fillText(str, 180, 350);
  // vcanvas对象转换为base64位编码
  const dataURL = can.toDataURL('image/png');
  return dataURL;
}
```

reportUtil.js

```javascript
// 导出excel
export function saveAs(obj, fileName) {
  let tmpa = document.createElement("a");
  tmpa.download = fileName || "下载";
  //将blob数据对象转成链接下载
  tmpa.href = URL.createObjectURL(obj); //绑定a标签
  tmpa.click(); //模拟点击实现下载
  setTimeout(function () { //延时释放
    URL.revokeObjectURL(obj); //用URL.revokeObjectURL()来释放这个object URL
  }, 100);
};
```

