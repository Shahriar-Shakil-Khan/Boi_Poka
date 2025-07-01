import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/AddToDb';
import Book from '../Book/Book';

const ReadList = () => {

      const [readList,setReadList]=useState([]);
      const [sort,setSort]=useState("")
    
    const data=useLoaderData();
    useEffect(()=>{
        const storeBookData=getStoredBook();
        const ConvertedStoredBooks=storeBookData.map(id=>parseInt(id));
        const myReadList=data.filter(book=>ConvertedStoredBooks.includes(book.bookId));
        setReadList(myReadList)
    },[])

    const handleSort=(type)=>{
        setSort(type)
        if(type==="years"){
            const sortedByYear=[...readList].sort((a,b)=>a.yearOfPublishing-b.yearOfPublishing);
            setReadList(sortedByYear)
        }if(type==="ratings"){
            const sortedByRating=[...readList].sort((a,b)=>a.rating-b.rating);
            setReadList(sortedByRating)
        }
    }
    
    
     return (
        <div>
            <div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1">Sort By :{sort?sort:""}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("pages")}>Pages</a></li>
    <li><a onClick={()=>handleSort("ratings")}>ratings</a></li>
  </ul>
</div>
            <Tabs>
    <TabList>
      <Tab>Read Book list</Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i read</h2>
       <div className='grid grid-cols-3 gap-12'>
                    {
                    readList.map(b=> <Book key={b.bookId} singleBook={b}></Book>)
                }
        </div>        
    </TabPanel>
    <TabPanel>
      <h2>My Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;