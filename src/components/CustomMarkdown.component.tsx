import React, {FunctionComponent} from 'react'
import ReactMarkDown from 'react-markdown'

interface propsInt {
  text: string
  alternate: boolean
}

const CustomMarkdown:FunctionComponent<propsInt> = (props) => {

    const cssClass = props.alternate ? 'global--markdown__alternate' : 'global--markdown'

    return (
      <div className={`${cssClass}`}>
        <ReactMarkDown >{props.text}</ReactMarkDown>
      </div>
    )
}

export default CustomMarkdown;