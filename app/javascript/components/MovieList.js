import React from 'react';

const MovieList = ({movieList=[]}) => {
  return (
    <>
    { movieList.map((data,index) => {
        if (data) {
          return (
            <div key={data.original_title}>
              <h1>{data.original_title}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default MovieList