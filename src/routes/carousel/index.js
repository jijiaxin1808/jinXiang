import React from 'react';
import { Button, Table, Carousel, Popconfirm, Input, Select } from 'antd';
import './index.less';
import Axios from 'axios';
import Forms from './form';

const {Option} = Select;

export default class Carousels extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Show: false,
            columns: [
                {
                    title: "状态",
                    dataIndex: "states",
                    key: "state"
                },
                {
                    title: "序号",
                    key: "num",
                    dataIndex:  "num"
                },
                {
                    title: "名称",
                    key: "name",
                    dataIndex:  "name"
                },
                {
                    title: "活动ID",
                    key: "ID",
                    dataIndex:  "ID"
                },
                {
                    title: "图片",
                    key: "picture",
                    dataIndex:  "picture"
                },
                {
                    title: "操作",
                    key: "operate",
                    dataIndex:  "operate",
                    render:(text, record ) =>{
                    return (
                        <Button onClick={()=>this.ClickedTable(text)}>
                            <Popconfirm title={`你确定要${text}`} onConfirm={() => this.handleDelete(record.key)}>
                            <a>{text}</a>
                            </Popconfirm>
                        </Button>
                    )
                    }
                }
            ],

            // dataSource是从后端返回的图片信息
            dataSource: [
                {
                    states: "当前",
                    num: "9",
                    name: "过大年",
                    ID: "0004",
                    picture: "",
                    operate: "下线",
                    key: '1'
                },
                {
                    states: "当前",
                    num: "8",
                    name: "过大年",
                    ID: "0004",
                    picture: "",
                    operate: "下线",
                    key: '2'
                },
                {
                    states: "当前",
                    num: "7",
                    name: "过大年",
                    ID: "0004",
                    picture: "",
                    operate: "下线",
                    key: '3'
                },
                {
                    states: "当前",
                    num: "6",
                    name: "过大年",
                    ID: "0004",
                    picture: "",
                    operate: "下线",
                    key: '4'
                },
                {
                    states: "历史",
                    num: "5",
                    name: "校园美景",
                    ID: "",
                    picture: "1.jpg",
                    operate: "删除",
                    key: '5'
                },
                {
                    states: "历史",
                    num: "4",
                    name: "校园美景",
                    ID: "",
                    picture: "1.jpg",
                    operate: "删除",
                    key: '6'
                },
                {
                    states: "历史",
                    num: "3",
                    name: "校园美景",
                    ID: "",
                    picture: "1.jpg",
                    operate: "删除",
                    key: '7'
                },
                {
                    states: "历史",
                    num: "2",
                    name: "校园美景",
                    ID: "",
                    picture: "1.jpg",
                    operate: "删除",
                    key: '8'
                },
                {
                    states: "历史",
                    num: "1",
                    name: "校园美景",
                    ID: "",
                    picture: "1.jpg",
                    operate: "删除",
                    key: '9'
                }
                
            ],
            fields: {
                Name: "",
                Activity: "",
                Picture: "",
            }
        }
        this.ClickedButton = this.ClickedButton.bind(this);
        this.ClickedTable = this.ClickedTable.bind(this);
        this.ChangeInput = this.ChangeInput.bind(this);
        this.SubmitDate = this.SubmitDate.bind(this);
        this.ClickedForms = this.ClickedForms.bind(this);
    }
    componentDidMount(){
        Axios.get('http://blog.csxjh.vip:8000/carousels/listAll').then(res=>{
            // this.state.dataSource = res;
            console.log(res);
        }).catch(()=>{
            console.log("轮播图获取失败");
        })
    }

    fields =  {
        name: "",
        ID: "",
        picture: "",
    }

    ChangeInput(e){
        this.fields.name = e.target.value;
    }

    ChangeSelect(e){
        if(e==="activity"){
            this.setState({ types: 'activity' })
        }else if(e==="picture"){
            this.setState({types: 'picture'})
        }else{
            this.setState({types: ''})
        }
    }
    
    getDate(type, ActPic){
        if(type === 'activity'){
            this.fields.ID = ActPic
        }else if(type === 'picture'){
            this.fields.picture = ActPic
        }
        
    }

    SubmitDate(){
        this.setState({
            fields: {...this.fields}
        })
    }
    ClickedButton(){
        const dataSource = [...this.state.dataSource];
        this.setState({dataSource:dataSource.unshift({

        })})
    }
    ClickedTable(e){
    }
    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
      };
    
    // 点击新填后，表单出现
    ClickedForms(){
          this.setState({
            Show: true
          })
      }

    render(){
        return (
            <div className='carousels'>
                自定义轮播图
                <div className="carousels-head">
                    <div className="carousels-head-left">
                        自定义轮播图可以是活动,也可以是图片，二者择一。<br/>
                        若是活动，请填写已过审的活动ID，用户点击该轮播图跳转该活动页面;若图片不可以点击。
                    </div>
                    <div className="carousels-head-right">
                    <Button type="primary" onClick={this.ClickedForms}>新增</Button>
                    </div>
                </div>
                <div>
                    <Table columns={this.state.columns} dataSource={this.state.dataSource} />
                </div>
                {/* <div className="carousels-show">
                <Carousel>
                    <div>
                      <a href="" ><img src="../../../public/asset/wenjian.png"/></a>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                    <div>
                      <h3>4</h3>
                    </div>
                </Carousel>
                </div> */}
                <div className={this.state.Show?"carousels-form":"Hidden"} >
                    <Forms />
                </div>
                
            </div>
        )
    }
}
// {"Type":{"name":"Type","value":"activity","touched":true,"dirty":false,"validating":false}}
// {"Activity:":{"name":"Activity:","value":"cdv","touched":true,"dirty":true,"validating":true}}