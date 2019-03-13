import React from 'react';
import { Row, Col } from 'antd';
import Grid from 'antd/lib/card/Grid';
import { Typography } from 'antd';
import { Button } from 'antd';
import { Upload } from 'antd';
import { Icon } from 'antd';
import authUser from '../utils/authUser';

const styles = {
  gridMain: {
    paddingTop: 100,
    backgroundColor: '#f1f1f1',
    height: '100vh',
  },
  gridSecond: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex: 100,
  },
  rowMain: {
    textAlign: 'center',
  },
  columnMain: {
    width: 800,
    height: '50vh',
    margin: '0 auto',
    boxShadow: '-2px 1px 23px #ccc',
  },
  columnSecond: {
    textAlign: 'center',
    padding: '20px',
    height: '50vh',
    backgroundColor: '#fff',
    display: 'flex',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  columnThird: {
    textAlign: 'center',
    padding: '20px',
    borderLeft: '1px solid #eee ',
    height: '50vh',
    backgroundColor: '#fff',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    display: 'flex',
    flex: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleMain: {
    color: '#1DA57A',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  titleSecond: {
    fontSize: 13,
    marginTop: 15,
    fontWeight: 400,
    color: '#9c9c9cd9',
  },
  buttonMain: {
    height: 110,
    width: 126,
    fontSize: 14,
  },
  iconMain: {
    display: 'block',
    fontSize: 20,
  },
  imgMain: {
    width: "100%",
  },
  titleThird: {
    color: '#f1f1f1',
  },
};

class UploadImage extends React.Component {

  state = {
    fileList: [],
  };

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {  

    const { fileList } = this.state;
    const { Title } = Typography;

    return (
      <Grid style={styles.gridMain}>
        <Row style={styles.rowMain} >
          <Col style={styles.columnMain}>
            <Col span={12} style={styles.columnSecond}>
              <Grid style={styles.gridSecond}>
                <Title style={styles.titleMain}>Upload Your Invoice</Title>
                <Upload
                  action="http://localhost:5000/invoice"
                  fileList={fileList}
                  name="invoice"
                  onChange={this.handleChange}
                >
                  {fileList.length
                    ? null
                    : <Button style={styles.buttonMain}>
                      <Icon type="upload" style={styles.iconMain} />
                      <Typography>Click to Upload</Typography>
                    </Button>
                  }
                  <Title style={styles.titleSecond}>
                    Max File Size: 5MB
                  </Title>
                </Upload>
              </Grid>
            </Col>
            <Col span={12} style={styles.columnThird}>
              <Grid>
                {fileList.length && fileList[0].response
                  ? <img src={fileList[0].response.fileUrl} style={styles.imgMain} />
                  : <Title level={3} style={styles.titleThird}>Preview Image</Title>
                }
              </Grid>
            </Col>
          </Col>
        </Row>
      </Grid >
    );
  }
};

export default authUser(UploadImage);
