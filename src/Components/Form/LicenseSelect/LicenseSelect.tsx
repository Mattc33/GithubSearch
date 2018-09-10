import * as React from 'react'

const licenseTypes = [
    {display: '', value: ''},
    {display: 'Academic Free License v3.0', value: 'afl-3.0'},
    {display: 'Apache license 2.0', value: 'apache-2.0'},
    {display: 'Artistic license 2.0', value: 'artistic-2.0'},
    {display: 'Boost Software License 1.0', value: 'apache-2.0'},
    {display: 'BSD 2-clause "Simplified" license', value: 'bsd-2-clause'},
    {display: 'BSD 3-clause "New" or "Revised" license', value: 'bsd-3-clause'},
    {display: 'BSD 3-clause Clear license', value: 'bsd-3-clause-clear'},
    {display: 'Creative Commons license family', value: 'cc'},
    {display: 'Creative Commons Zero v1.0 Universal', value: 'cc0-1.0'},
    {display: 'Creative Commons Attribution 4.0', value: 'cc-by-4.0'}
    // {display: 'Creative Commons Attribution Share Alike 4.0', value: 'cc-by-sa-4.0'},
    // {display: 'Do What The F*ck You Want To Public License', value: 'wtfpl'},
    // {display: 'Educational Community License v2.0', value: 'ecl-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'},
    // {display: 'Apache license 2.0', value: 'apache-2.0'}



// Eclipse Public License 1.0	epl-1.0
// European Union Public License 1.1	eupl-1.1
// GNU Affero General Public License v3.0	agpl-3.0
// GNU General Public License family	gpl
// GNU General Public License v2.0	gpl-2.0
// GNU General Public License v3.0	gpl-3.0
// GNU Lesser General Public License family	lgpl
// GNU Lesser General Public License v2.1	lgpl-2.1
// GNU Lesser General Public License v3.0	lgpl-3.0
// ISC	isc
// LaTeX Project Public License v1.3c	lppl-1.3c
// Microsoft Public License	ms-pl
// MIT	mit
// Mozilla Public License 2.0	mpl-2.0
// Open Software License 3.0	osl-3.0
// PostgreSQL License	postgresql
// SIL Open Font License 1.1	ofl-1.1
// University of Illinois/NCSA Open Source License	ncsa
// The Unlicense	unlicense
// zLib License	zlib
]

const LicenseSelect = (props: any) => 
    <select 
        id="licenseInput" 
        className={props.className}
        onChange={props.onChange}
    >
        { 
            licenseTypes.map( (eaLicense, index) => 
                <option key={index} value={eaLicense.value}>
                    {eaLicense.display}
                </option>
            )
        }
    </select>

export default LicenseSelect
