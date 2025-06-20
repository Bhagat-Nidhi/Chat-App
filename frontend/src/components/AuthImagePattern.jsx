const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex flex-col justify-start items-center bg-base-200 text-center px-8 pt-24 pb-8">
      <img
        src="/img.svg"
        alt="Auth Illustration"
        className="w-full max-w-[400px] h-[300px] object-contain rounded-xl shadow-md"
      />

      <div className="mt-8">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-base-content/70 mt-2 max-w-xs">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
