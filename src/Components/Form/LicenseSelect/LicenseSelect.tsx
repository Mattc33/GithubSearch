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
    {display: 'Creative Commons Attribution 4.0', value: 'cc-by-4.0'},
    {display: 'Creative Commons Attribution Share Alike 4.0', value: 'cc-by-sa-4.0'},
    {display: 'Do What The F*ck You Want To Public License', value: 'wtfpl'},
    {display: 'Educational Community License v2.0', value: 'ecl-2.0'},
    {display: 'Eclipse Public License 1.0', value: 'epl-1.0'},
    {display: 'European Union Public License 1.1', value: 'eupl-1.1'},
    {display: 'GNU Affero General Public License v3.0', value: 'agpl-3.0'},
    {display: 'GNU General Public License family', value: 'gpl'},
    {display: 'GNU General Public License v2.0', value: 'gpl-2.0'},
    {display: 'GNU General Public License v3.0', value: 'apache-2.0'},
    {display: 'GNU Lesser General Public License family', value: 'lgpl'},
    {display: 'GNU Lesser General Public License v2.1', value: 'lgpl-2.1'},
    {display: 'GNU Lesser General Public License v3.0', value: 'lgpl-3.0'},
    {display: 'ISC', value: 'isc'},
    {display: 'LaTeX Project Public License v1.3c', value: 'lppl-1.3c'},
    {display: 'Microsoft Public License', value: 'ms-pl'},
    {display: 'MIT', value: 'mit'},
    {display: 'Mozilla Public License 2.0', value: 'mpl-2.0'},
    {display: 'Open Software License 3.0', value: 'osl-3.0'},
    {display: 'PostgreSQL License', value: 'postgresql'},
    {display: 'SIL Open Font License 1.1', value: 'ofl-1.1'},
    {display: 'University of Illinois/NCSA Open Source License', value: 'ncsa'},
    {display: 'The Unlicense', value: 'unlicense'},
    {display: 'zLib License', value: 'zlib'}
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
