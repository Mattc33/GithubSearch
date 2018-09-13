import * as React from 'react'
// import styles from './SearchPagination.module.scss'

import { Pagination } from 'antd'

const SearchPagination = (props: any) => 
    <Pagination
        defaultCurrent={1}
        current={props.currentPage}
        total={props.numberOfResults / 30}
        onChange={props.onPageChange}
    />

export default SearchPagination
