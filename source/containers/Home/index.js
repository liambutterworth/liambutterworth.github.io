import React from 'react';
import Banner from 'components/Banner';
import Wrapper from 'components/Wrapper';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Row, Column } from 'components/Grid';
import backgroundImg from 'assets/images/mic-stand.jpg';

const Home = () => (
  <div>
    <Header />

    <Banner
      image={backgroundImg}
      staticText="Hi, I'm Liam and I"
      dynamicText={[
        'make things.',
        'create websites.',
        'play loud music.',
      ]}
    />

    <Wrapper>
      <Row>
        <Column small="6" medium="4" large="3">This is a column</Column>
        <Column small="3" medium="4" large="3">This is a column</Column>
        <Column small="3" medium="4" large="6">This is a column</Column>
      </Row>

      <Row>
        <Column small="6" medium="4" large="3">This is a column</Column>
        <Column small="3" medium="4" large="3">This is a column</Column>
        <Column small="3" medium="4" large="6">This is a column</Column>
      </Row>

      <p id="about">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lectus a sem pulvinar consequat a in turpis. Sed efficitur mauris lorem, sed aliquam augue placerat vel. Maecenas laoreet mauris vel risus gravida scelerisque. Mauris sollicitudin sed nisl dictum malesuada. Curabitur mattis vulputate sem, at lobortis massa suscipit vitae. Integer ut nibh sed nisl congue venenatis. Cras sed egestas nibh. Cras pretium, lectus in facilisis auctor, nisl ante placerat felis, a convallis ligula sapien ac erat. Ut pellentesque, metus pellentesque malesuada ultrices, ligula purus rhoncus nulla, nec condimentum nulla leo vel augue. Sed sit amet quam a purus rhoncus bibendum. Phasellus est ipsum, hendrerit at viverra vel, ultricies sit amet diam. Aliquam erat volutpat. Vivamus viverra sapien at nunc euismod laoreet.
        Vivamus pulvinar, ex ultrices vestibulum pharetra, purus odio maximus odio, nec commodo neque mauris sed urna. Phasellus at metus justo. Ut dignissim ipsum vitae ante consequat condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla pellentesque nisi ultrices ante laoreet, in viverra quam auctor. Aenean vitae diam aliquam, dapibus orci nec, ullamcorper sem. Fusce at urna diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque et euismod mauris. Donec placerat sem id efficitur rutrum. Nam iaculis purus non tincidunt elementum. Nulla vitae tincidunt nulla. Curabitur suscipit tristique nibh, eget luctus nisl venenatis a. Duis nec ultrices diam. Suspendisse nec sem ac dolor malesuada vulputate id suscipit sem.
        Etiam molestie accumsan risus in aliquam. In tristique velit nec placerat gravida. Donec tincidunt risus quis imperdiet tempus. Suspendisse aliquam efficitur tellus, a pulvinar libero viverra vitae. Mauris scelerisque diam id orci auctor blandit. Fusce turpis lacus, posuere quis tortor ac, scelerisque tincidunt ligula. Integer et mollis est, non sodales tellus. Praesent facilisis odio libero, interdum malesuada arcu ultricies in. Mauris vitae urna at orci placerat egestas ac id ipsum. Pellentesque egestas lorem arcu, tempus suscipit lorem faucibus ac. Aenean id ex commodo, eleifend odio a, ultrices neque. Suspendisse potenti. Donec vitae quam dolor. Ut laoreet ultrices rhoncus. Quisque ultrices felis sapien, eget imperdiet metus sodales sit amet.
        Suspendisse vel pharetra elit. Praesent fermentum mi cursus, varius ante sit amet, tincidunt neque. Phasellus eget cursus sapien. Nullam mollis feugiat eros. Maecenas sit amet nulla non felis dignissim elementum id vel felis. Vivamus rutrum dapibus magna in hendrerit. Vestibulum vitae efficitur dolor, non congue turpis. Etiam vitae sodales magna. Phasellus blandit condimentum sagittis. Nam ut mattis metus. Fusce pellentesque consectetur sapien, nec interdum felis fringilla nec. Integer vestibulum vulputate lectus et volutpat. Phasellus cursus massa id gravida luctus. Phasellus non blandit sem. Sed sit amet dui mollis, pulvinar sem vitae, pharetra enim.
        Praesent imperdiet arcu lectus, non semper nunc fermentum non. Donec laoreet gravida elit. Praesent pellentesque egestas metus, et dignissim justo faucibus quis. Quisque non aliquam augue. Phasellus nec lorem sapien. Maecenas id nisi quis mi sagittis auctor et eu neque. Maecenas vel accumsan ex, id imperdiet nulla. Nam id augue non ante facilisis bibendum. Nullam id tellus maximus, mattis quam nec, semper urna. Mauris at eleifend lectus. Sed id sollicitudin quam. Donec tincidunt quam in sapien laoreet blandit vel sit amet elit. Mauris urna orci, pharetra id est nec, elementum mattis elit.
      </p>

      <p id="work">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lectus a sem pulvinar consequat a in turpis. Sed efficitur mauris lorem, sed aliquam augue placerat vel. Maecenas laoreet mauris vel risus gravida scelerisque. Mauris sollicitudin sed nisl dictum malesuada. Curabitur mattis vulputate sem, at lobortis massa suscipit vitae. Integer ut nibh sed nisl congue venenatis. Cras sed egestas nibh. Cras pretium, lectus in facilisis auctor, nisl ante placerat felis, a convallis ligula sapien ac erat. Ut pellentesque, metus pellentesque malesuada ultrices, ligula purus rhoncus nulla, nec condimentum nulla leo vel augue. Sed sit amet quam a purus rhoncus bibendum. Phasellus est ipsum, hendrerit at viverra vel, ultricies sit amet diam. Aliquam erat volutpat. Vivamus viverra sapien at nunc euismod laoreet.
        Vivamus pulvinar, ex ultrices vestibulum pharetra, purus odio maximus odio, nec commodo neque mauris sed urna. Phasellus at metus justo. Ut dignissim ipsum vitae ante consequat condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla pellentesque nisi ultrices ante laoreet, in viverra quam auctor. Aenean vitae diam aliquam, dapibus orci nec, ullamcorper sem. Fusce at urna diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque et euismod mauris. Donec placerat sem id efficitur rutrum. Nam iaculis purus non tincidunt elementum. Nulla vitae tincidunt nulla. Curabitur suscipit tristique nibh, eget luctus nisl venenatis a. Duis nec ultrices diam. Suspendisse nec sem ac dolor malesuada vulputate id suscipit sem.
        Etiam molestie accumsan risus in aliquam. In tristique velit nec placerat gravida. Donec tincidunt risus quis imperdiet tempus. Suspendisse aliquam efficitur tellus, a pulvinar libero viverra vitae. Mauris scelerisque diam id orci auctor blandit. Fusce turpis lacus, posuere quis tortor ac, scelerisque tincidunt ligula. Integer et mollis est, non sodales tellus. Praesent facilisis odio libero, interdum malesuada arcu ultricies in. Mauris vitae urna at orci placerat egestas ac id ipsum. Pellentesque egestas lorem arcu, tempus suscipit lorem faucibus ac. Aenean id ex commodo, eleifend odio a, ultrices neque. Suspendisse potenti. Donec vitae quam dolor. Ut laoreet ultrices rhoncus. Quisque ultrices felis sapien, eget imperdiet metus sodales sit amet.
        Suspendisse vel pharetra elit. Praesent fermentum mi cursus, varius ante sit amet, tincidunt neque. Phasellus eget cursus sapien. Nullam mollis feugiat eros. Maecenas sit amet nulla non felis dignissim elementum id vel felis. Vivamus rutrum dapibus magna in hendrerit. Vestibulum vitae efficitur dolor, non congue turpis. Etiam vitae sodales magna. Phasellus blandit condimentum sagittis. Nam ut mattis metus. Fusce pellentesque consectetur sapien, nec interdum felis fringilla nec. Integer vestibulum vulputate lectus et volutpat. Phasellus cursus massa id gravida luctus. Phasellus non blandit sem. Sed sit amet dui mollis, pulvinar sem vitae, pharetra enim.
        Praesent imperdiet arcu lectus, non semper nunc fermentum non. Donec laoreet gravida elit. Praesent pellentesque egestas metus, et dignissim justo faucibus quis. Quisque non aliquam augue. Phasellus nec lorem sapien. Maecenas id nisi quis mi sagittis auctor et eu neque. Maecenas vel accumsan ex, id imperdiet nulla. Nam id augue non ante facilisis bibendum. Nullam id tellus maximus, mattis quam nec, semper urna. Mauris at eleifend lectus. Sed id sollicitudin quam. Donec tincidunt quam in sapien laoreet blandit vel sit amet elit. Mauris urna orci, pharetra id est nec, elementum mattis elit.
      </p>

      <p id="contact">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lectus a sem pulvinar consequat a in turpis. Sed efficitur mauris lorem, sed aliquam augue placerat vel. Maecenas laoreet mauris vel risus gravida scelerisque. Mauris sollicitudin sed nisl dictum malesuada. Curabitur mattis vulputate sem, at lobortis massa suscipit vitae. Integer ut nibh sed nisl congue venenatis. Cras sed egestas nibh. Cras pretium, lectus in facilisis auctor, nisl ante placerat felis, a convallis ligula sapien ac erat. Ut pellentesque, metus pellentesque malesuada ultrices, ligula purus rhoncus nulla, nec condimentum nulla leo vel augue. Sed sit amet quam a purus rhoncus bibendum. Phasellus est ipsum, hendrerit at viverra vel, ultricies sit amet diam. Aliquam erat volutpat. Vivamus viverra sapien at nunc euismod laoreet.
        Vivamus pulvinar, ex ultrices vestibulum pharetra, purus odio maximus odio, nec commodo neque mauris sed urna. Phasellus at metus justo. Ut dignissim ipsum vitae ante consequat condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla pellentesque nisi ultrices ante laoreet, in viverra quam auctor. Aenean vitae diam aliquam, dapibus orci nec, ullamcorper sem. Fusce at urna diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque et euismod mauris. Donec placerat sem id efficitur rutrum. Nam iaculis purus non tincidunt elementum. Nulla vitae tincidunt nulla. Curabitur suscipit tristique nibh, eget luctus nisl venenatis a. Duis nec ultrices diam. Suspendisse nec sem ac dolor malesuada vulputate id suscipit sem.
        Etiam molestie accumsan risus in aliquam. In tristique velit nec placerat gravida. Donec tincidunt risus quis imperdiet tempus. Suspendisse aliquam efficitur tellus, a pulvinar libero viverra vitae. Mauris scelerisque diam id orci auctor blandit. Fusce turpis lacus, posuere quis tortor ac, scelerisque tincidunt ligula. Integer et mollis est, non sodales tellus. Praesent facilisis odio libero, interdum malesuada arcu ultricies in. Mauris vitae urna at orci placerat egestas ac id ipsum. Pellentesque egestas lorem arcu, tempus suscipit lorem faucibus ac. Aenean id ex commodo, eleifend odio a, ultrices neque. Suspendisse potenti. Donec vitae quam dolor. Ut laoreet ultrices rhoncus. Quisque ultrices felis sapien, eget imperdiet metus sodales sit amet.
        Suspendisse vel pharetra elit. Praesent fermentum mi cursus, varius ante sit amet, tincidunt neque. Phasellus eget cursus sapien. Nullam mollis feugiat eros. Maecenas sit amet nulla non felis dignissim elementum id vel felis. Vivamus rutrum dapibus magna in hendrerit. Vestibulum vitae efficitur dolor, non congue turpis. Etiam vitae sodales magna. Phasellus blandit condimentum sagittis. Nam ut mattis metus. Fusce pellentesque consectetur sapien, nec interdum felis fringilla nec. Integer vestibulum vulputate lectus et volutpat. Phasellus cursus massa id gravida luctus. Phasellus non blandit sem. Sed sit amet dui mollis, pulvinar sem vitae, pharetra enim.
        Praesent imperdiet arcu lectus, non semper nunc fermentum non. Donec laoreet gravida elit. Praesent pellentesque egestas metus, et dignissim justo faucibus quis. Quisque non aliquam augue. Phasellus nec lorem sapien. Maecenas id nisi quis mi sagittis auctor et eu neque. Maecenas vel accumsan ex, id imperdiet nulla. Nam id augue non ante facilisis bibendum. Nullam id tellus maximus, mattis quam nec, semper urna. Mauris at eleifend lectus. Sed id sollicitudin quam. Donec tincidunt quam in sapien laoreet blandit vel sit amet elit. Mauris urna orci, pharetra id est nec, elementum mattis elit.
      </p>
    </Wrapper>

    <Footer />
  </div>
);

export default Home;
