import { useState } from 'react'

import ArticleTable from './ArticleTable';
import './App.css'
import MissedArticleTable from './MissedArticleTable';


function App() {

  return (
    <>
      <ArticleTable/>
      <MissedArticleTable/>
    </>
  )
}

export default App
