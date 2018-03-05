import React, { Component } from 'react';
import './aside.css';
import graceHopper from '../../assets/images/Grace_Hopper.jpg';
import eeuu from '../../assets/images/eeuu.png';


class Aside extends Component {
    render() {
      return (
        <aside className="summary">
        <table class="summary-table">
          <thead>
            <tr>
              <th colspan="2"> Grace Murray Hopper</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2">
                <img src={graceHopper} alt="Gracce Hopper"/>
                <p>Rear Admiral Grace M. Hopper, 1984</p>
                <hr></hr>
              </td>
            </tr>
            <tr>
              <th>Nickname(s)</th>
              <td>"Amazing Grace"</td>
            </tr>
            <tr>
              <th>Born</th>
              <td>December 9, 1906</td>
            </tr>
            <tr>
              <th>Died</th>
              <td>January 1, 1992 (aged 85)</td>
            </tr>
            <tr>
              <th>Place of burial</th>
              <td>Arlington National Cemetery</td>
            </tr>
            <tr>
              <th>Allegiance</th>
              <td> <img src={eeuu} alt="EEUU"/> United States of America</td>
            </tr>
            <tr>
              <th>Service/branch</th>
              <td> United States Navy</td>
            </tr>
            <tr>
              <th>Years of service</th>
              <td>1943–1966, 1967–1971, 1972–1986</td>
            </tr>
          </tbody>
      
        </table>
      </aside>
         
      );
    }
  }
  
  export default Aside;