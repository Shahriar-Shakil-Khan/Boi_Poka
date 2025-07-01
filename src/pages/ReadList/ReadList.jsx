import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/AddToDb';
import Book from '../Book/Book';

const ReadList = () => {

      const [readList,setReadList]=useState([])
    
    const data=useLoaderData();
    useEffect(()=>{
        const storeBookData=getStoredBook();
        const ConvertedStoredBooks=storeBookData.map(id=>parseInt(id));
        const myReadList=data.filter(book=>ConvertedStoredBooks.includes(book.bookId));
        setReadList(myReadList)
    },[])
    
    
     return (
        <div>
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