const InputBox = ({ title, type = "text", placeholder }) => {
  return (
    <div className="pb-9 w-full text-black dark:text-white">
      <label className="block pb-3 font-brand font-semibold text-base">
        {title}
      </label>
      <input
        type={type}
        className="border border-[#9F9F9F] rounded-xl py-5 px-5 w-full text-black dark:text-white"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
