import React from "react";
import { Loader } from 'semantic-ui-react'

const LoaderExample = (props) => {
  return (
  		<Loader active >
  			{props.children}
  		</Loader>
  	)
}
export default LoaderExample;