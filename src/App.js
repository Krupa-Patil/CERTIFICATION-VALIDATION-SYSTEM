import React, { Component } from 'react';
import web3 from './web3';
import ipfs from './ipfs';
import storehash from './storehash';
import { Button } from 'reactstrap';
import './App.css';
// import { BrowserRouter as Router, Switch, 
//   Route, Redirect,} from "react-router-dom";


class App extends Component {
  state =
   {      ipfsHash:null,      buffer:'',      ethAddress:'',      transactionHash:'',      txReceipt: ''    };
  captureFile =(event) => {      
    event.stopPropagation();
    event.preventDefault()  ;
    const file = event.target.files[0]  ;
     let reader = new window.FileReader() ;
    reader.readAsArrayBuffer(file)  ;
    reader.onloadend = () => this.convertToBuffer(reader)      };

  convertToBuffer = async(reader) => {   
           const buffer = await Buffer.from(reader.result); 
           this.setState({buffer});    };
    Click = async () => {try
                          {this.setState({blockNumber:"waiting.."}); 
                            this.setState({gasUsed:"waiting..."});
                            await web3.eth.getTransactionReceipt(this.state.transactionHash, (err, txReceipt)=>{   console.log(err,txReceipt);  this.setState({txReceipt});   });  }
                            catch(error){      console.log(error);    }}

    onSubmit = async (event) => { event.preventDefault();
                                  const accounts = await web3.eth.getAccounts();  
                                  const ethAddress= await storehash.options.address;      
                                  this.setState({ethAddress});         
                                  await ipfs.add(this.state.buffer, (err, ipfsHash) => { console.log(err,ipfsHash);          
                                  this.setState({ ipfsHash:ipfsHash[0].hash });           
                                  const str = storehash.methods.sendHash(this.state.ipfsHash).send({from: accounts[0] }, (error, transactionHash) => { console.log(transactionHash); this.setState({transactionHash}); 

                                  const str1 = 'QmQ7Yj7wwJUSTdXturKG5i5d9dxnpQTrmZY9VYXqSTHPH2';
                                  // let arrTwo = arrOne;  
                                  console.log(str1 === str); 
                                  console.log("data is present")
                                }); }) };

      // constructor(props){
      //   super(props);
      //   this.state={apiResponse:""};
      
      // }
      // callAPI(){
      //   fetch("http://localhost:9000/testAPI")
      //   .then(res => res.text())
      //   .then(res => this.setState({apiResponse: res}));
      // }

      // componentWillMount(){
      //   this.callAPI();
      // }

      render() {
        const myStyle={
          backgroundImage: 
   "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfjn5m2HWXZ1Sumf5cw2JDGu9366_CaVzzg&usqp=CAU')",
         height:'150vh',
          marginTop:'-70px',
        //  fontSize:'50px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
      };
      
        return (  
          <body className="Appbody">     
            <div className="App" style={myStyle}> 
                 <header className="App-header">
                    <h1 >Student Certificate</h1>
                      </header>
                      
                      <hr/><grid>     
                      <h1 >Student Certificate</h1>    
                      <h3 > Choose a Certificate </h3><br/><br/>
                      <form onSubmit={this.onSubmit}>
                        <input type = "file"  onChange = {this.captureFile}   />
                        <Button  bsStyle="primary"   type="submit" >    Send it    </Button> 
                      </form>
                      {/* <form onSubmit={this.onSubmit}>
                      <input type = "file"  onChange = {this.captureFile}   />
                      <
                        if (str == str1)
                        {
                          <h3>Data found</h3>
                        }
                        else
                        {
                          <h3>Data not found</h3>
                        }/>
                      </form> */}
                         {/* <hr/> <Button onClick = {this.onClick}> Get Transaction Receipt </Button> <hr/> */}
                          <br/><br/>
                      <table class="center" >  
                      <thead>
                      <tr> 
                         <th>Category</th>  <th> </th>  
                      <th>Values</th> </tr> 
                       </thead>
                      <tbody>
                         <tr>  
                            <td>IPFS Hash stored on Ethereum</td>
                                <td> : </td>  
                                 <td>{this.state.ipfsHash}</td>    </tr> 
                      <tr> 
                          <td>Ethereum Contract Address</td> 
                            <td> : </td>   
                               <td>{this.state.ethAddress}</td>     </tr> 
                       </tbody>        
                       </table>   
                        </grid>    
                        
        

                      </div>
                  
                     </body>      );
       }}export default App;
