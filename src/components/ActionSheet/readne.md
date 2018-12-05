# ActionSheet简介
从底部弹出选项窗口，我们把它直接挂在需要用到的页面容器组件里，通过控制它的属性visible来控制它是否弹出——不用担心是否会产生多余的渲染，因为在visible===false时（默认等于false），这个组件的返回值为null.

### install
	……
	

### 引用
	……

### props 
  名称 | 类型 | 默认值 | 描述
  --- | --- | ---- | -------
  visible | Boolean | false | 控制组件的显示 
  options | Array | - | button选项的集合，Item参考options.item
  callback | Function | (options)=>{console.log(options)} | 点击button后的回调，形参代表button选项的options属性
  title | String | - | 弹窗的标题
  message | String | - | 标题下的文本
  
### option.item
  名称 | 类型 | 默认值 | 描述
  --- | --- | ---- | -------
  text | String/Number | - | 此选项按钮的标题文本
  key | String/Number | indexOf | 此选项按钮的key值
  type | String | 'normal' | 此选项按钮的属性，控制字体颜色。其他可选 'warning'(红色)
  disable | Boolean | false | 控制此选项是否禁止触发事件

### 示例

```
let options=[
    {
        text:'选项一',
        key:0
        
    },
    {
        text:'选项二(警告)',
        type:'warning'
    },
    {
        text:'选项三(不可用)',
        key:333,
        disable:true
    }
]
let callback = (options)=>{
    console.log('下面是该选项的options:',options)
}
render(
    <ActionSheet visible={true} options={options} callback={callback} title={'标题'} />     
);

```


