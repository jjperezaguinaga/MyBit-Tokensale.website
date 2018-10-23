import React, {Fragment} from 'react'
import { Row, Col, Card, Button } from 'antd';
import { links } from '../constants/links';
import stylesheet from './landing-banner.scss';

const bannerImageUrl = '../../static/svgs/landingGraphic.svg';

const lendingBannerData = {
  title: <h2 className="textCard-header">Leaders in Distributing <br/> Wealth</h2>,
  button: {text: 'Discover MyBit', url: links.aboutPage},
  content:
  <Fragment>
    <p>
      MyBit enables the rapid building, testing, and deployment of wealth
      management applications on the Ethereum blockchain.
    </p>
  </Fragment>
};

export class TermsBanner extends React.Component {
  render() {
    return (
      <Fragment>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Row type="flex" className="landing-banner">
          <Col xs={24} lg={12}>
            <Card bordered={false} className="textCard">
              {lendingBannerData.title}
              <div className="textCard-content">
                {lendingBannerData.content}
              </div>
            </Card>
          </Col>
          <Col xs={0} lg={12}>
            <Card bordered={false} className="imageCard">
              <img src={bannerImageUrl} alt="Landing banner"></img>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
