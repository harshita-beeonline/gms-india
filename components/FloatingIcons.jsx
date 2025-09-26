import Link from "next/link";

const FloatingIcons = () => (
  <div className='fixed lg:right-3 right-1 translate-y-28 z-40 flex flex-col gap-y-1 opacity-80 hover:opacity-100 focus:opacity-100 ' >
    <a target={"_blank"} rel="noreferrer" href="https://in.linkedin.com/company/global-marketing-services-india" className="block bg-white text-indigo-500 hover:text-indigo-600 rounded-md shadow-sm hover:shadow-md p-1 border border-gms h-8 w-8" >
      <svg
        className="h-6 w-6 fill-current"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z"
        />
      </svg>
    </a>
    <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/mems.gms/" className="block bg-white text-indigo-600 hover:text-indigo-700 rounded-md shadow-sm hover:shadow-md p-1 border border-gms h-8 w-8" >
      <svg
        className="h-6 w-6 fill-current"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"
        />
      </svg>
    </a>
    <a target={"_blank"} rel="noreferrer" href="https://www.youtube.com/watch?v=MjQcQLrxmwM" className="block bg-white text-red-600 hover:text-red-700 rounded-md shadow-sm hover:shadow-md p-1 border border-gms h-8 w-8"  >
      <svg
        width={24}
        className="h-6 w-6 fill-current"
        height={24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.006 19.012H11.986C11.924 19.012 5.721 19 4.156 18.575C3.29543 18.3432 2.62335 17.6707 2.392 16.81C2.11058 15.2224 1.97469 13.6123 1.986 12C1.97873 10.385 2.11831 8.77271 2.403 7.183C2.64071 6.32151 3.30983 5.64595 4.169 5.4C5.691 5 11.723 5 11.979 5H12C12.063 5 18.282 5.012 19.831 5.437C20.6898 5.67001 21.3605 6.3411 21.593 7.2C21.8834 8.79354 22.0197 10.4113 22 12.031C22.007 13.644 21.8671 15.2543 21.582 16.842C21.3477 17.7016 20.6752 18.3726 19.815 18.605C18.295 19.008 12.262 19.012 12.006 19.012ZM10.006 9.005L10.001 15.005L15.213 12.005L10.006 9.005Z"
        />
      </svg>
    </a>
    <Link className="my-auto block bg-white p-1 text-gray-600 rounded-md border border-gms h-8 w-8" href={`mailto:?subject=GMS+India&body=https://gms-india.com`} >
      <svg
        width={24}
        height={24}
        className="h-6 w-6 fill-current
                "
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z"
        />
      </svg>

    </Link>
    <Link className="block bg-white rounded-md p-1 text-emerald-600 h-8 w-8 border border-gms" href={`whatsapp://send?text=${encodeURI(`Take a look at all the products by GMS India. https://gms-india.com`)}`}>
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><path d="m12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 3.8c2.2 0 4.2 0.9 5.7 2.4 1.6 1.5 2.4 3.6 2.5 5.7 0 4.5-3.6 8.1-8.1 8.1-1.4 0-2.7-0.4-3.9-1l-4.4 1.1 1.2-4.2c-0.8-1.2-1.1-2.6-1.1-4 0-4.5 3.6-8.1 8.1-8.1zm0.1 1.5c-3.7 0-6.7 3-6.7 6.7 0 1.3 0.3 2.5 1 3.6l0.1 0.3-0.7 2.4 2.5-0.7 0.3 0.099c1 0.7 2.2 1 3.4 1 3.7 0 6.8-3 6.9-6.6 0-1.8-0.7-3.5-2-4.8s-3-2-4.8-2zm-3 2.9h0.4c0.2 0 0.4-0.099 0.5 0.3s0.5 1.5 0.6 1.7 0.1 0.2 0 0.3-0.1 0.2-0.2 0.3l-0.3 0.3c-0.1 0.1-0.2 0.2-0.1 0.4 0.2 0.2 0.6 0.9 1.2 1.4 0.7 0.7 1.4 0.9 1.6 1 0.2 0 0.3 0.001 0.4-0.099s0.5-0.6 0.6-0.8c0.2-0.2 0.3-0.2 0.5-0.1l1.4 0.7c0.2 0.1 0.3 0.2 0.5 0.3 0 0.1 0.1 0.5-0.099 1s-1 0.9-1.4 1c-0.3 0-0.8 0.001-1.3-0.099-0.3-0.1-0.7-0.2-1.2-0.4-2.1-0.9-3.4-3-3.5-3.1s-0.8-1.1-0.8-2.1c0-1 0.5-1.5 0.7-1.7s0.4-0.3 0.5-0.3z"></path></svg>
        </Link>
  </div>
);

export default FloatingIcons;