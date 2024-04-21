export default function PageBox({ code, title, image, text }) {
  return (
    <div
      className=" bg-extra 
    mb-4 mt-4 flex  flex-col 
    items-center rounded-md p-4 pb-5 pt-5 shadow-md"
    >
      {title && (
        <h1 className=" bg-extra rounded-md pb-2 pl-56 pr-56 pt-2 text-xl font-semibold">
          {title}
        </h1>
      )}
      {code && (
        <pre className="text-accent bg-dark my-2 overflow-auto rounded-md p-3 text-sm shadow-lg">
          {code}
        </pre>
      )}
      <div className="flex justify-center pt-2">
        {image && (
          <img
            src={image}
            alt="personal pic"
            className="h-60 w-auto rounded-md p-2 shadow-lg"
          />
        )}
        {text && (
          <p className="text-dark bg-background text-md my-2 w-3/4 overflow-auto rounded-md p-7 shadow-lg">
            {text}
          </p>
        )}
      </div>
    </div>
  )
}
