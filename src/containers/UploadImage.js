import React from 'react';
import { Row, Col } from 'antd';
import Grid from 'antd/lib/card/Grid';
import { Typography } from 'antd';
import { Button } from 'antd';
import { Upload } from 'antd';
import { Icon } from 'antd';

class UploadImage extends React.Component {

  render() {

    const { Title } = Typography;
    return (
      <Grid style={{ margin: '4px', backgroundColor: '#DCDCDC' }}>
        <Row>
          <Col span={12} style={{ textAlign: 'center', padding: '20px', border: '5px solid purple', height: '98vh' }}>
            <Grid>
              <Title level={3}>Upload Your Invoice</Title>
              <Title level={4} strong>Max File Size: 5MB</Title>
              <Upload >
                <Button>
                  <Icon type="upload" /> Click to Upload
                </Button>
              </Upload>
            </Grid>
          </Col>
          <Col span={12} style={{ textAlign: 'center', padding: '20px', border: '5px solid purple', height: '98vh' }}>
            <Grid>
              <Title level={3}>Preview Image</Title>
            </Grid>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default UploadImage;
