export const Footer = () => {
  return (
    <footer className="bg-light-blue pt-5 pb-3 px-3 rounded-t-[10px] shadow-footerShadow">
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center">
          <span className="icon-Vector text-xl w-6 h-6 flex items-center justify-center text-blue"></span>
          <div className="text-xs mt-2 text-blue">ראשי</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="icon-Vector-1 text-xl w-6 h-6 flex items-center justify-center text-[#8C8D96]"></span>
          <div className="text-xs mt-2 text-[#8C8D96]">מפות</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="icon-Vector-2 text-xl w-6 h-6 flex items-center justify-center text-[#8C8D96]"></span>
          <div className="text-xs mt-2 text-[#8C8D96]">תרגומים</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="icon-Vector-3 text-xl w-6 h-6 flex items-center justify-center text-[#8C8D96]"></span>
          <div className="text-xs mt-2 text-[#8C8D96]">גיוס כספים</div>
        </div>
      </div>
    </footer>
  )
}
