import { forwardRef } from "react";
import { Icon } from "./Icon.style";

const SearchIcon = forwardRef((props, ref) => (
	<Icon
		ref={ref}
		viewBox="0 0 32 32"
		fillRule="evenodd"
		fill="currentColor"
		{...props}
	>
		<title>Search</title>
		<path d="M23.485,21.179c-0.374,-0.373 -0.938,-0.415 -1.259,-0.093l-1.166,1.166c-0.322,0.321 -0.28,0.885 0.093,1.259c0,-0 4.374,6.795 5.963,7.516c0.957,0.435 1.473,-0.08 2.656,-1.263c1.148,-1.149 1.701,-1.701 1.229,-2.622c-0.799,-1.56 -7.516,-5.963 -7.516,-5.963Zm-1.748,-1.73c-0.235,-0.235 -0.617,-0.235 -0.852,-0l-1.479,1.479c-0.235,0.235 -0.235,0.617 -0,0.852l0.457,0.457c0.235,0.236 0.617,0.236 0.852,0l1.479,-1.479c0.235,-0.235 0.235,-0.617 0,-0.852l-0.457,-0.457Zm-17.447,-15.115c4.326,-4.326 11.35,-4.326 15.676,-0c4.326,4.325 4.326,11.349 -0,15.675c-4.326,4.326 -11.35,4.326 -15.676,-0c-4.325,-4.326 -4.325,-11.35 0,-15.675Zm1.923,1.922c3.265,-3.265 8.566,-3.265 11.83,-0c3.265,3.265 3.265,8.566 0,11.831c-3.264,3.264 -8.565,3.264 -11.83,-0c-3.265,-3.265 -3.265,-8.566 -0,-11.831Zm11.264,1.702c0.399,-0.847 -0.598,-2.157 -2.225,-2.922c-1.627,-0.765 -3.272,-0.698 -3.671,0.149c0.808,0.07 1.989,0.373 3.165,0.926c1.176,0.553 2.163,1.27 2.731,1.847Z" />
	</Icon>
));

export default SearchIcon;