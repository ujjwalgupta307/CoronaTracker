import React from 'react';

// import Cards from './components/Cards/Cards';

import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png';


 class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
    const data = await fetchData();
    this.setState({data});
    // console.log(data);
 } 

handleCountryChange = async(country) => {
    const fetchedData=await fetchData(country);
    console.log(fetchedData);
    console.log(country);
    this.setState({data: fetchedData,country:country});
    // fetch data then set state
}

    render() {
        const {data,country}=this.state;
         return (
             <div className={styles.container}> 
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                 <Cards data={data}>
                 </Cards>
                 <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
                 <Chart data={data} country={country}/>
             </div>
         )
     }
 }
 export default App;