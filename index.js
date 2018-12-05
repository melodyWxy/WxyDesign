import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {ActionSheet,Header,Button} from './src/index';
const headerTitleOptions={
    options:'标题'
}
const HeaderLeftOptions = {
    options:{
        // title:'关闭',
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEVHcEz///////////////////////////////8W/R0OAAAACHRSTlMAOVt656zIGaO1mnkAAAFGSURBVHja7dY9T8MwEIfxhresWZAYi2BgRIDECltHmGBk7FiBQF0LaXQfm5C0iVHvzlGhnp7f+rdzfkkcj0YAAAAAAAAAAAAAAABARHZ2VTjx6/XpbPveK28TEXk045s6XY7N+LiOy9tYjb2fGiJPRnzepJU1l/cmLseRIs/SttPnfNimcm+sVTtCWfo1PlZPkYUaT9exPtaTdfwyZCK1wpmIMYasiyt3R7pm6mAuurTUeh/1vb1dOeibfSrxpI8v3THInVMkaFa581SfMvWHuLklIjNnS9RNyYPYe7+CZsqCBIspX5ud98Pedo3cLzL3h/qriH30ZGGzB/sz0LcsXE0pti0SmcnAIkmWK8nGp3mFk3yMSY6VJAdkMOPdHfX9YHb500ry+01zkYhcifJ/uRINudz9oTcAAAAAAAAAAAAAAADQ+Ab58oMaxQJaTAAAAABJRU5ErkJggg=='
    },
    callback:()=>{
        alert('1')
    }
}
const HeaderActionOptions = {
    options:{
        items:[{  
                title:'关闭',
                icon:'https://img.alicdn.com/tfs/TB10wK0iwHqK1RjSZFgXXa7JXXa-200-200.png',
                iconType:'http'
            },{  
                title:'关闭',
                icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEVHcEz///////////////////////////////8W/R0OAAAACHRSTlMAOVt656zIGaO1mnkAAAFGSURBVHja7dY9T8MwEIfxhresWZAYi2BgRIDECltHmGBk7FiBQF0LaXQfm5C0iVHvzlGhnp7f+rdzfkkcj0YAAAAAAAAAAAAAAABARHZ2VTjx6/XpbPveK28TEXk045s6XY7N+LiOy9tYjb2fGiJPRnzepJU1l/cmLseRIs/SttPnfNimcm+sVTtCWfo1PlZPkYUaT9exPtaTdfwyZCK1wpmIMYasiyt3R7pm6mAuurTUeh/1vb1dOeibfSrxpI8v3THInVMkaFa581SfMvWHuLklIjNnS9RNyYPYe7+CZsqCBIspX5ud98Pedo3cLzL3h/qriH30ZGGzB/sz0LcsXE0pti0SmcnAIkmWK8nGp3mFk3yMSY6VJAdkMOPdHfX9YHb500ry+01zkYhcifJ/uRINudz9oTcAAAAAAAAAAAAAAADQ+Ab58oMaxQJaTAAAAABJRU5ErkJggg==',
                iconType:'http'
            },{  
                title:'关闭',
                icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEVHcEz///////////////////////////////8W/R0OAAAACHRSTlMAOVt656zIGaO1mnkAAAFGSURBVHja7dY9T8MwEIfxhresWZAYi2BgRIDECltHmGBk7FiBQF0LaXQfm5C0iVHvzlGhnp7f+rdzfkkcj0YAAAAAAAAAAAAAAABARHZ2VTjx6/XpbPveK28TEXk045s6XY7N+LiOy9tYjb2fGiJPRnzepJU1l/cmLseRIs/SttPnfNimcm+sVTtCWfo1PlZPkYUaT9exPtaTdfwyZCK1wpmIMYasiyt3R7pm6mAuurTUeh/1vb1dOeibfSrxpI8v3THInVMkaFa581SfMvWHuLklIjNnS9RNyYPYe7+CZsqCBIspX5ud98Pedo3cLzL3h/qriH30ZGGzB/sz0LcsXE0pti0SmcnAIkmWK8nGp3mFk3yMSY6VJAdkMOPdHfX9YHb500ry+01zkYhcifJ/uRINudz9oTcAAAAAAAAAAAAAAADQ+Ab58oMaxQJaTAAAAABJRU5ErkJggg==',
                iconType:'http'
            }
        ]        
	},
    callback:(i)=>{alert(i)}
}
class App extends Component{
    render(){
        return (
            <div className='xx'>
                <Header titleOptions={headerTitleOptions} leftOptions={HeaderLeftOptions} rightOptions={HeaderActionOptions}/>
                <Button onClick={(a)=>{console.log(a)}}/>
            </div>
        )
    }
}
// export default App;
const div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(<App />,div);
