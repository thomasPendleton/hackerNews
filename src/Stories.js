import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits, nbPages } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"> </div>;
  }

  return (
    <section className="stories">
      {hits.map((story) => {
        const {objectID, title, author, url} = story
        return <article key={objectID} className='story'>{story.title}</article>;
      })}
    </section>
  );
}

export default Stories
