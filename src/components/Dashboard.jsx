import React from 'react';
import '../styles/dashboard.css';

const Dashboard = () => {
  const handleVideoClick = (videoId) => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(url, '_blank');
  };

  return (
    <div className="dashboard-container">
      <div className="bottom-horizontal">
        <p className="bold">
          BIR Tax Reminders:
        </p>
        <p className="blinking">
          Your Expanded Withholding Tax - Rental will due by September 10!!!
        </p>
      </div>

      <div className="middle-content">
        <div className="block">
          <p className='pardes bold'>You have some pending open cases:</p>
          <table>
            <thead>
              <tr>
                <th>Return Period</th>
                <th className='spacedes'>Case Number</th>
                <th className='spacedes'>Tax Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12/31/2022</td>
                <td className='spacedes'>001148756</td>
                <td className='spacedes'>Annual IT</td>
              </tr>
              <tr>
                <td>12/31/2021</td>
                <td className='spacedes'>001139760</td>
                <td className='spacedes'>Annual IT</td>
              </tr>
              <tr>
                <td>09/31/2021</td>
                <td className='spacedes'>001134578</td>
                <td className='spacedes'>Quarterly PT</td>
              </tr>
              <tr>
                <td>08/13/2021</td>
                <td className='spacedes'>001132997</td>
                <td className='spacedes'>Monthly EWT</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p className='pardes bold'>All open-cases must be settled.</p>
        </div>
        <div className="block">
          <div className="scrollable-content">
            <p className='pardes bold'>Helpful videos about taxes:</p>
            <p>
              BIR Tax Seminar&nbsp;
              <span className="video-link" onClick={() => handleVideoClick('7MyTJsQUdqI')}>
                Part 1 - Click to Play Video
              </span><br />
              BIR Tax Seminar&nbsp;
              <span className="video-link" onClick={() => handleVideoClick('31vFOURddB8')}>
                Part 2 - Click to Play Video
              </span>
            </p>
            <p>
              Knowing your tax obligations&nbsp;
              <span className="video-link" onClick={() => handleVideoClick('4z3uo5-Zl6Q')}>
                - Click to Play Video
              </span>
            </p>
            <p>
              BIR Authority to Print&nbsp;
              <span className="video-link" onClick={() => handleVideoClick('gsj3BgoWvao')}>
                - Click to Play Video
              </span>
            </p>
            <p>
              BIR Books of Accounts&nbsp;
              <span className="video-link" onClick={() => handleVideoClick('k3DmrkkiRQI')}>
                - Click to Play Video
              </span>
            </p>
            <p>
              BIR Tax Compliance Verification Drive (TCVD)&nbsp;
              <span className="video-link" onClick={() => handleVideoClick('klooUNaXIwk')}>
                - Click to Play Video
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="top-horizontal">
      <p className='pardes bold'>New Issuances</p>
        <p><strong>Revenue Regulations No. 9-2023 </strong>prescribes the rules and regulations governing the imposition of Excise Tax on perfumes and toilet waters as provided under Section 150(b) of the Tax Code of 1997, as amended. <a href="/images/bir_files/internal_communications_1/Full%20Text%20RR%202023/RR%20No.%209-2023.pdf">more</a></p>
        <p><strong>Revenue Regulations No. 8-2023&nbsp;</strong>clarifies the information that shall appear in the official receipts/sales invoices on purchases of Senior Citizens (SCs) and Persons With Disabilities (PWDs) through online (E-Commerce) or mobile applications, in relation to Revenue Regulations (RR) No. 10-2015.&nbsp; <a href="/images/bir_files/internal_communications_1/Full%20Text%20RR%202023/RR%20No.%208-2023.pdf">more</a></p>
        <p><strong>Revenue Regulations No. 7-2023</strong>&nbsp;amends certain provisions of RR Nos. 17-2011 and 2-2022, implementing RA No. 9505 (Personal Equity and Retirement Account [PERA] Act of 2008). <a href="/images/bir_files/internal_communications_1/Full%20Text%20RR%202023/RR%20No.%207-2023.pdf">more</a></p>
        <br />      
        <p className='pardes bold'>Advisories</p>
        <p>
          Advisory on the Unavailability of Electronic Documentary Stamp Tax (eDST). <a href="/images/bir_files/internal_communications_1/Advisory/2023/Tax%20Advisories%202023/Advisory%20eDST%20Unavailability%20Advisory.pdf">more</a>
        </p>
        <p>
          <strong>TAX ADVISORY:&nbsp;</strong>Advising all Electronic Filing and Payment System (eFPS) taxpayers to file BIR Form No. 1701Q- Quarterly Income Tax Return (ITR) using the eFPS&nbsp;<span className="underline">starting with the 2<sup>nd</sup>&nbsp;Quarter 2023 ITR&nbsp;</span>since the Income Tax rates of BIR Form No. 1701Q have already been updated in the system.&nbsp;<a href="/images/bir_files/internal_communications_1/Advisory/2023/Tax%20Advisories%202023/Tax%20Advisory%202.pdf"><em>Advisory</em></a>
        </p>
        <p>
          Revenue Memorandum Circular No. 86-2023&nbsp;circularizes&nbsp;the List of Qualified Personal Equity and Retirement Account (PERA) eligible products duly approved by the SEC. <a href="/images/bir_files/internal_communications_2/RMCs/2023%20RMCs/RMC%20No.%2086-2023.pdf">RMC 86-2023</a>/<a href="/index.php/revenue-issuances/revenue-memorandum-circulars/2023-revenue-memorandum-circulars.html">Annexes</a>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

