"use client";
interface PortofolioProps {
  isDark: boolean;
}
const Portofolio = ({ isDark }: PortofolioProps) => {
  return (
    <>
      <div
        className={
          isDark
            ? "bg-gray-800 my-8 py-8 text-white"
            : " my-8 py-8 bg-white text-blue-800"
        }
      >
        <h1 className="text-center font-bold">Blog</h1>
        <p
          className={
            isDark
              ? "text-center text-sm text-white"
              : "text-center text-sm text-black"
          }
        >
          Berikut adalah beberapa tulisan dari saya.
        </p>

        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
            <div
              className={
                !isDark
                  ? "bg-gray-800 aspect-square shadow-lg border border-black mx-4 "
                  : "bg-white aspect-square shadow-lg border border-white mx-4 "
              }
            >
              <div className="flex-col m-2">
                <div className="w-full">
                  <img src="https://picsum.photos/600/300" alt="" />
                </div>
                <h1
                  className={
                    !isDark
                      ? "text-sky-600  font-bold "
                      : "text-black  font-bold "
                  }
                >
                  Nama Portofolio
                </h1>

                <p
                  className={
                    !isDark ? "text-white text-sm " : "text-black text-sm "
                  }
                >
                  Deskrisi
                </p>

                <div className="flex">
                  <div
                    className={
                      !isDark ? "text-white text-xs" : "text-black text-xs"
                    }
                  >
                    Teknologi :
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portofolio;
