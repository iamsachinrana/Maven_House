import React, { useEffect, useState } from 'react'
import DashboardNavbar from './DashboardNavbar'
import Web3 from "web3";
import * as abis from '@unlock-protocol/contracts'
import axios from 'axios';

const web3 = new Web3('https://rpc-mumbai.maticvigil.com/')
const Mytickets = () => {

  const tokenContract = '0x6453b2F06560D1e3269d512e8024b601d83F72D9';
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    handleCalls();
  }, []);
  const handleCalls = async () => {
    const contract = new web3.eth.Contract(abis.PublicLockV11.abi, tokenContract)
    let tokenBalance = await contract.methods.balanceOf('0xd2645b8E1DE56d53236bd0EB2728Efa9Ae710003').call();
    //let totalMint = await contract.methods.totalMint();
    let totalMint = 10;
    if (tokenBalance > 0 && totalMint > 0) {
      for (let i = 0; i < totalMint; i++) {
        let _index = await contract.methods.tokenOfOwnerByIndex('0xd2645b8E1DE56d53236bd0EB2728Efa9Ae710003', i).call();

        let metadata = await contract.methods.tokenURI(_index).call();

        await axios.get(metadata).then((response) => {
          setTickets([...tickets, response?.data]);
        }).catch((error) => console.log(error));
      }
    }
    return false;
  }

  return (
    <div>
      <div className="text-white">
        <DashboardNavbar />
        <h1 className='text-3xl font-semibold text-start'>Tickets</h1>
        {
          (tickets.length === 0) && <div className="text-body1 mt-3 font-light">Once you buy tickets, you'll be able to access here. </div>
        }
        {<ul>{
          (tickets.length) && tickets.map((ticket, index) => {
            return <li style={{
              border: '1px solid',
              height: 'auto',
              width: '100 %',
              display: 'block',
              overflow: 'hidden',
              padding: '10px',
              marginBottom: '20px'
            }}>
              <div style={{ width: '10%', float: 'left', marginLeft: '2%' }}>
                <img src={ticket.image} alt={ticket.name} />
              </div>
              <div style={{ width: '85%', marginLeft: '20px', float: 'left' }}>
                <h3 style={{ fontWeight: 'bold' }}>{ticket.name}</h3>
                <p>{ticket.description}</p>
                <a href="/kendrik/live" style={{ padding: '5px 20px', display: 'inline-block', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }} target={'_blank'}>Join the Event</a>
              </div>
            </li>

          })
        }
        </ul>
        }

      </div>
    </div >
  )
}

export default Mytickets