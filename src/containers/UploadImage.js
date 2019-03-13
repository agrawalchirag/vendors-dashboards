import React from 'react';
import { Row, Col } from 'antd';
import Grid from 'antd/lib/card/Grid';
import { Typography } from 'antd';
import { Button } from 'antd';
import { Upload } from 'antd';
import { Icon } from 'antd';

class UploadImage extends React.Component {

  state = {
    fileList: [],
  };

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {

    const { fileList } = this.state;
    const { Title } = Typography;
    return (
      <Grid style={{ paddingTop: 100, backgroundColor: '#f1f1f1', height: '100vh', }}>
        <Row style={{ textAlign: 'center' }} >
          <Col style={{ width: 800, height: '50vh', margin: '0 auto', boxShadow: '-2px 1px 23px #ccc' }}>
            <Col span={12} style={{ textAlign: 'center', padding: '20px', height: '50vh', backgroundColor: '#fff', display: 'flex', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, }}>
              <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', flex: 100, }}>
                <Title style={{ color: '#1DA57A', fontSize: 16, textTransform: 'uppercase', }}>Upload Your Invoice</Title>
                <Upload
                  action="http://localhost:5000/invoice"
                  fileList={fileList}
                  name="invoice"
                  onChange={this.handleChange}
                >
                  {fileList.length ? null : <Button style={{ height: 110, width: 126, fontSize: 14, }}>
                    <Icon type="upload" style={{ display: 'block', fontSize: 20, }} />
                    <Typography>Click to Upload</Typography>
                  </Button>
                  }
                  <Title style={{ fontSize: 13, marginTop: 15, fontWeight: 400, color: '#9c9c9cd9' }}>
                    Max File Size: 5MB
                  </Title>
                </Upload>
              </Grid>
            </Col>
            <Col span={12} style={{ textAlign: 'center', padding: '20px', borderLeft: '1px solid #eee ', height: '50vh', backgroundColor: '#fff', borderTopRightRadius: 5, borderBottomRightRadius: 5, display: 'flex', flex: 100, alignItems: 'center', justifyContent: 'center', }}>
              <Grid>
                {fileList.length && fileList[0].response
                  ? <img src={fileList[0].response.fileUrl} style={{ width: "100%" }} />
                  : <Title level={3} style={{ color: '#f1f1f1' }}>Preview Image</Title>
                }
              </Grid>
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default UploadImage;
