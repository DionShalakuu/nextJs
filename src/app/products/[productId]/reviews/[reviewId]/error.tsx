"use client"

type ErrorProps = {
    error:Error,
    reset: ()=> void,
}

const ErrorBoundary = ({error,reset}:ErrorProps) => {
  return (
    <div>ErrorBoundary {error.message}
    <button onClick={reset}> Try Again</button>
    </div>
  )
}

export default ErrorBoundary