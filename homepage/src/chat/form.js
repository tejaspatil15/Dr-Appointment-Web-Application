import React,{Component} from "react";
import ChatBot from 'react-simple-chatbot'

class Form extends Component {
    render(){
        return(
            <ChatBot
            steps={[
                {
                    id:'1',
                    message:'Welocome to Medi-Appoint! what is your name?',
                    trigger:'name',
                },
                {
                    id:'name',
                    user:true,
                    trigger:'3',
                },
                {
                    id:'3',
                    message:'Hi {previousValue}! How may I help you?',
                    trigger:'help',
                },
                {
                    id:'help',
                    options:[
                        {value:'doctor',label:'Regarding Doctor',trigger:'5'},
                        {value:'appoint',label:'Regarding Appointment',trigger:'6'},
                    ],
                },
                {
                    id:'5',
                    options:[
                        {value:'info',label:'Regarding doctors information',trigger:'7'},
                        {value:'Previ',label:'Regarding Doctors Previous Appointment',trigger:'8'},
                    ],
                },
                {
                    id:'6',
                    message:'You need to first Login your account and go to book an appointment.Available on time book your slot.',
                    trigger:'9'
                },
                {
                    id:'7',
                    message:'Go to doctors profile and their dashboard for information about doctors',
                    trigger:'9',
                },
                {
                    id:'8',
                    message:'Go to previous appointment search them on search as per your need',
                    trigger:'9'
                },
                {
                    id:'9',
                    message:'Any other help you need',
                    trigger:'last',
                },
                {
                    id:'last',
                    options:[
                        {value:'y',label:'Yes',trigger:'help'},
                        {value:'n',label:'No',trigger:'end'},
                    ],
                },
                {
                    id:'end',
                    message:'Hope your problem is solved. Thank you for visiting Medi-Assist!',
                    end:true,
                },
            ]} 
            />
        );
    }
}

export default Form;