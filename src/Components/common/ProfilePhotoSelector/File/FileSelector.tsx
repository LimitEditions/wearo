export default ({ setFile } : { setFile: Function }) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            setFile(file)
            // const reader = new FileReader();
            // reader.onloadend = () => {
            //     setFile(file); // сохраняем файл
            // };
            // reader.readAsDataURL(e.target.files[0]);
        }
    };
    return (
        <>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="p-2 border border-gray-300 rounded-md shadow"
                multiple={false}
            />
        </>
    )
}