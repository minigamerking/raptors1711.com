/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:51 PM -- April 6th, 2023
 * Project: @frc1711/raptors1711.com
 */

import styles from "./page.module.scss";
import type { ReactElement } from "react";
import type { NextPage, Metadata } from "next";
import PageTitle from "../../components/page-title";
import BasicBlogFlow from "../../components/basic-blog-flow";
import { makeMetadata } from "../../util/make-metadata";

const Test: NextPage = (): ReactElement => (
	<>
		<PageTitle>Test Page</PageTitle>
		<BasicBlogFlow>{`
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Dui ut ornare lectus sit. Suscipit adipiscing bibendum est ultricies integer quis auctor. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Aliquet enim tortor at auctor urna. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Ut sem viverra aliquet eget sit amet tellus. Ac turpis egestas integer eget. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Fames ac turpis egestas sed. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Quis vel eros donec ac odio tempor orci dapibus ultrices. Convallis aenean et tortor at risus viverra adipiscing. Porttitor lacus luctus accumsan tortor posuere ac ut. Pharetra et ultrices neque ornare aenean. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Velit ut tortor pretium viverra suspendisse potenti nullam ac.
			Duis at tellus at urna condimentum mattis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Adipiscing enim eu turpis egestas pretium. Vitae turpis massa sed elementum tempus egestas sed. Mauris in aliquam sem fringilla ut. Nisl vel pretium lectus quam id leo. Integer malesuada nunc vel risus commodo. Maecenas volutpat blandit aliquam etiam erat. Id porta nibh venenatis cras sed felis. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Tempor id eu nisl nunc. Congue eu consequat ac felis donec. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Purus non enim praesent elementum facilisis leo. Ipsum dolor sit amet consectetur adipiscing. Malesuada proin libero nunc consequat interdum varius. Tempus imperdiet nulla malesuada pellentesque elit eget gravida.
			Tempus urna et pharetra pharetra massa massa ultricies mi. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. At urna condimentum mattis pellentesque id nibh. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Enim tortor at auctor urna nunc. Magna etiam tempor orci eu lobortis. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Vel eros donec ac odio tempor orci dapibus. Egestas quis ipsum suspendisse ultrices gravida dictum. Hendrerit dolor magna eget est lorem ipsum dolor. Massa tincidunt dui ut ornare lectus sit amet est. Amet consectetur adipiscing elit duis tristique. In iaculis nunc sed augue. Massa ultricies mi quis hendrerit dolor. Nunc consequat interdum varius sit amet mattis vulputate.
			Ut tristique et egestas quis ipsum suspendisse ultrices. Laoreet sit amet cursus sit amet dictum sit. Massa enim nec dui nunc. Tellus mauris a diam maecenas. Magna fermentum iaculis eu non diam phasellus. Porta lorem mollis aliquam ut porttitor leo a. Iaculis nunc sed augue lacus viverra vitae. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Pretium lectus quam id leo in vitae turpis massa sed. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Et leo duis ut diam quam nulla porttitor.
			Nibh venenatis cras sed felis eget. Sit amet tellus cras adipiscing enim eu turpis. At consectetur lorem donec massa sapien faucibus et molestie ac. Integer malesuada nunc vel risus commodo viverra. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Suspendisse ultrices gravida dictum fusce. Posuere urna nec tincidunt praesent semper. At tellus at urna condimentum mattis pellentesque. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Proin sed libero enim sed faucibus turpis in eu mi.
		`}</BasicBlogFlow>
	</>
);

export default Test;

export const metadata: Metadata = makeMetadata({
	title: "Test Page",
});
