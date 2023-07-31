import React, { useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Pagination({ data, setItemsToShow, itemsPerPage, currentPage, setCurrentPage, setPages, pages, bodyPart }) {
    const pageCount = data.length / itemsPerPage - Math.floor(data.length / itemsPerPage) != 0 ?
        Math.floor(data.length / itemsPerPage) + 1
        : Math.floor(data.length / itemsPerPage)
    const intervalStart = (currentPage - 1) * itemsPerPage
    const intervalEnd = intervalStart + itemsPerPage

    useEffect(() => {
        const pages = Array.from({ length: pageCount }, (_, index) => index + 1)
        setPages(pages)
        setCurrentPage(1)
    }, [data])

    useEffect(() => {
        setItemsToShow(data.slice(intervalStart, intervalEnd))
        setCurrentPage(1)
    }, [bodyPart])

    useEffect(() => {
        setItemsToShow(data.slice(intervalStart, intervalEnd))
    }, [currentPage, bodyPart, data])

    const previousPage = () => {
        setCurrentPage(currentPage - 1 === 0 ? 1 : currentPage - 1)
    }
    const nextPage = () => {
        setCurrentPage(currentPage + 1 > pageCount ? pageCount : currentPage + 1)
    }

    const firstPageNum = 1
    const middleLeftPageNum = currentPage <= 4 ? 2 : '...'
    const leftPageNum = currentPage <= 4 ? 3 : (currentPage >= pageCount - 3 ? pageCount - 4 : currentPage - 1)
    const centralPageNum = currentPage <= 4 ? 4 : (currentPage >= pageCount - 3 ? pageCount - 3 : currentPage)
    const rightPageNum = currentPage <= 4 ? 5 : (currentPage >= pageCount - 3 ? pageCount - 2 : currentPage + 1)
    const middleRightPageNum = currentPage >= pageCount - 3 ? pageCount - 1 : '...'

    const paginationArray = [firstPageNum, middleLeftPageNum, leftPageNum, centralPageNum, rightPageNum, middleRightPageNum, pageCount]

    return (
        <div className='text-center flex gap-1 justify-center mt-4'>
            <div className="sm:flex sm:gap-2">
                <div className="flex justify-center items-center">
                    {currentPage !== 1 && <p className='hidden sm:block cursor-pointer hover:-translate-x-2 transition duration-300 flex items-center px-1 pl-4 pr-2 rounded-l-full disabled' onClick={currentPage !== 1 ? previousPage : ''}>
                        <span className=''><IoIosArrowBack /></span>
                    </p>}
                </div>
                <div className="flex gap-1 mb-3 sm:mb-0">
                    {pageCount > 9 ?
                        paginationArray.map(pageNum =>
                            <span
                                onClick={() => pageNum !== '...' ? setCurrentPage(pageNum) : ''}
                                className={pageNum === '...' ? 'disabled' : (currentPage == pageNum ? 'h-full bg-indigo-500 text-indigo-50 rounded-full px-3 py-1' :
                                    'h-full cursor-pointer px-3 py-1')}>
                                {pageNum}</span>) :
                        pages.map(pageNum =>
                            <span
                                onClick={() => pageNum !== '...' ? setCurrentPage(pageNum) : ''}
                                className={currentPage == pageNum ? 'h-full bg-indigo-500 text-indigo-50 rounded-full px-3 py-1' :
                                    'h-full cursor-pointer transition duration-300 px-3 py-1'}
                            >{pageNum}</span>)
                    }
                </div>

                <div className="flex sm:gap-2 justify-center items-center">
                    {currentPage !== 1 && <p className='block sm:hidden cursor-pointer hover:-translate-x-2 transition duration-300 px-1 pl-4 pr-2 disabled flex items-center' onClick={currentPage !== 1 ? previousPage : ''}>
                        <span ><IoIosArrowBack /></span>
                    </p>}
                    {currentPage !== pageCount && <p className='cursor-pointer hover:translate-x-2 transition duration-300 px-1 pr-4 pl-2 flex items-center' onClick={currentPage !== pageCount ? nextPage : ''}>
                        <span ><IoIosArrowForward /></span>
                    </p>}
                </div>

            </div>

        </div>
    )
}
