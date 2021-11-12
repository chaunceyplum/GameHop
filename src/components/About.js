import React from 'react'
import { Container, Row } from 'react-bootstrap'
import AboutPic from "./images/About.jpeg"
const About = () => {
    return (
        <div className="bgColor">
            <Container className="bgColor">
                <Row className="spacer">
                    
                    <h3 className="text-center text-white spacer rounded">
                        About GameHop
                    </h3>
                </Row>
                <Row className="spacer">
                    <img src={AboutPic} alt="" className="spacer rounded"/>

                    <p className="text-white spacer rounded">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus libero, ultrices et fringilla ac, elementum in urna. Phasellus turpis dolor, pulvinar scelerisque mattis eget, pellentesque ut est. Aenean quis ex sed nulla sollicitudin placerat. Fusce eu dignissim lorem, vitae tristique eros. Integer at mauris pulvinar, ultricies odio id, pulvinar nisl. Suspendisse ac tellus sed urna feugiat tristique. Nullam odio lorem, feugiat ut hendrerit id, aliquet nec diam. Proin ultricies purus vitae eleifend efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis venenatis ullamcorper. Sed a nibh ac mauris auctor ullamcorper eu vitae elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris semper, magna eget maximus lobortis, lorem mi interdum ligula, eget placerat elit nisl a felis. In consectetur neque sed felis volutpat pharetra. Curabitur quis erat a dui faucibus tempus
                    </p>
                </Row>
                <Row className="spacer">
                    <h3 className="text-center text-white spacer rounded">
                        Who We Are
                    </h3>
                    <p className="text-white rounded spacer">
                        Nulla orci nisl, ultricies sit amet enim eu, scelerisque accumsan quam. Vestibulum in sapien auctor, hendrerit lacus at, tempus felis. Etiam scelerisque arcu lacus, quis vehicula lectus dapibus ut. Morbi bibendum nisi vel congue posuere. Praesent mattis tortor at volutpat fringilla. Curabitur auctor turpis sed luctus blandit. Suspendisse at pellentesque dolor. Fusce odio ex, feugiat sollicitudin luctus id, iaculis eget metus. Vestibulum euismod, ante vitae iaculis tincidunt, odio felis luctus dui, et sollicitudin eros ligula et massa. Sed cursus dignissim arcu nec tempor. In vitae sem in dui rhoncus rhoncus. Donec et rhoncus metus. Mauris posuere diam eget velit dictum lacinia.
                    </p>
                </Row>
                <Row className="spacer">
                    <h3 className="text-center text-white spacer rounded">
                        Our Story
                    </h3>
                    <p className="text-white rounded spacer">
                        Proin ultrices in augue in consectetur. Donec id facilisis augue. Integer ornare lacus et nulla venenatis, non consequat turpis tempor. Nunc felis urna, aliquam vel sapien nec, varius accumsan felis. Proin eget consectetur ex. Pellentesque vulputate purus aliquam pellentesque tempor. Aliquam vel mauris lacus. Phasellus eu metus dui. Nullam et turpis ex. Vivamus a ultricies nibh. Proin dolor est, elementum a egestas nec, ornare vel elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam lacinia diam purus, elementum vulputate ex aliquam eget.
                    </p>
                </Row>
                <Row className="spacer">
                    <h3 className="text-center text-white spacer rounded">
                        Our Plan
                    </h3>
                    <p className="text-white rounded spacer">

                        Duis lobortis dui risus, sit amet porttitor elit hendrerit viverra. Maecenas eget leo vitae purus egestas ornare non nec quam. Duis eu auctor nibh. Donec non e
                    </p>
                    <p className="text-white rounded spacer">
                        Donec consectetur mi dolor, at tempus velit lobortis vel. Vestibulum quis dui ac eros blandit convallis et id tortor. Suspendisse potenti. Mauris ac tellus hendrerit, pellentesque sapien non, fermentum est. Nulla id feugiat odio. Ut ultricies, ipsum eget mattis elementum, odio lectus tempor nisl, bibendum posuere velit sapien vel magna. Nunc lacus velit, fermentum nec dignissim et, faucibus non lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ornare, turpis quis pulvinar dapibus, quam leo tempor nibh, at scelerisque ante felis sit amet ipsum. Nulla facilisi.
                    </p>
                </Row>
            </Container>
            
        </div>
    )
}
export default About
