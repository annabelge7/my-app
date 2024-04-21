const Resume = () => {
  const resumeUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/AnnabelEdwards_Resume.pdf`

  return (
    <div className="m-20 w-3/4 overflow-hidden ">
      <object
        data={resumeUrl}
        className="h-screen min-h-[500px] w-full"
        aria-label="Resume PDF viewer"
      >
        <p className="p-4 text-sm text-gray-700">
          If you cannot view the document, please refresh the page
          <a
            href={resumeUrl}
            className="text-blue-600 visited:text-purple-600 hover:text-blue-800"
          ></a>
        </p>
      </object>
    </div>
  )
}

export default Resume
