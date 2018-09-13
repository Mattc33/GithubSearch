import * as React from 'react'

import { Pagination } from 'antd'

const SearchPagination = (props: any) => 
    <Pagination
        defaultCurrent={1}
        current={props.currentPage}
        total={props.numberOfResults}
        onChange={props.onPageChange}
    />

export default SearchPagination
