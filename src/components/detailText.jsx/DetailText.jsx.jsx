const DetailText = ({ question = true, text = "", questioner = "" }) => {
  return (
    <div className="flex flex-col gap-8">
      <h5 className="font-semibold">{question ? "Pertanyaan :" : "Jawaban :"}</h5>
      <p>
        <span className="text-2xl text-primary">"</span>
        {text}
        <span className="text-2xl text-primary">"</span>
      </p>
      <p>{questioner}</p>
    </div>
  );
};

export default DetailText;
