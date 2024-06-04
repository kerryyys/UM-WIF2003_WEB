import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import EditProfileIcon from '../../assets/icons/profile/edit_fill.svg';
import default_avatar from "../../assets/icons/profile/avatar-default-symbolic-svgrepo-com.svg";
import { Link,useParams } from 'react-router-dom';

function ProfileHeader(props) {
  const { name, university, location, avatarSrc, headline, tags = [], userId } = props;
  const { currentUser } = useParams();


  return (
    <Container style={{ margin: 'auto', width: '1000px' }}>
      <Row className="justify-content-center">
        <Col xs={12} md={3} className="text-center">
          <Image
            src={avatarSrc ? `data:${avatarSrc};base64,${avatarSrc}` : default_avatar}
            roundedCircle
            style={{ width: '180px', height: '180px' }}
          />

        </Col>
        <Col xs={12} md={5}>
          <p style={{ marginTop: '10px', fontSize: '25px', fontWeight: 'bold' }}>{name}</p>
          <div style={{ display: 'flex', marginTop: '5px' }}>
            <p style={{ color: '#858585', marginRight: '50px'}}>{location}</p>
            <p style={{  color: '#2D4777' }}>{university}</p>
          </div>
          <p style={{ marginTop: '5px' }}>{headline}</p>
          <div style={{ display: 'flex' }}>
            {tags.map((tag, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#80D1D5',
                  color: 'white',
                  padding: '5px 10px',
                  marginTop: '15px',
                  marginRight: '20px',
                  borderRadius: '10px',
                }}
              >
                {tag}
              </div>
            ))}
            {userId === currentUser && (
              <Link to={`/EditProfile/${userId}`}>
                <img src={EditProfileIcon} alt="edit profile" style={{ width: '30px', height: '30px', marginLeft: '200px', marginTop: '15px' }} />
              </Link>)}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileHeader;
