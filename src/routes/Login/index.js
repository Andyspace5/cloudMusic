import React, {Component} from 'react';
import {createForm} from 'rc-form';
import {connect} from 'dva';
import {List,InputItem,Button} from 'antd-mobile';
@connect(({login})=>{
  return{
    loginState : login.loginState
  }
})
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      formDate : []
    }
  }
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(value);
      this.setState({
        formDate:value
      },()=>{

        this.loginIn()
      })
    });


  };
  loginIn(){
    const {formDate} = this.state;
    this.props.dispatch({
      type : "login/loginIn",
      payload : {
        phone : formDate.phone.replace(/\s+/g,""),
        password : formDate.password.replace(/\s+/g,"")
      }
    })
  }
  render() {
    console.log(this.props);
    console.log(this.state);
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => 'Format'}>
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            placeholder="186 1234 1234"
          >手机号码</InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="****"
          >密码</InputItem>
        </List>
        <Button onClick={()=>{this.submit()}}>提交</Button>
      </div>
    );
  }
}

export default createForm()(Login);
