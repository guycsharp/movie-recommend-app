import { useState } from 'react'

import ArticleTable from './ArticleTable';
import './App.css'
import MissedArticleTable from './MissedArticleTable';


function App() {

  return (
    <>
      <ArticleTable tableClass="tableBlack" heading="Your Articles"/>
      <ArticleTable tableClass="tableRed" heading="Missed Articles"/>
      {/* <MissedArticleTable/> */}
    </>
  )
}

export default App
