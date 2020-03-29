import React from 'react'

function getText(isWelcome: boolean) {
    return isWelcome ? 'Hello world!' : 'Goodbye world!'
}
export default () => <div>{getText(true)}</div>
