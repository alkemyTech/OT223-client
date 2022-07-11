import React from 'react';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/images/facebook.svg';
import { ReactComponent as Mail } from '../../assets/images/mail.svg';
import { ReactComponent as Triangle } from '../../assets/images/triangle.svg';
import { ReactComponent as Members } from '../../assets/images/members.svg'
import { ReactComponent as Activities } from '../../assets/images/activities.svg'
import { ReactComponent as News } from '../../assets/images/news.svg'
import { ReactComponent as Testimonies } from '../../assets/images/testimonials.svg'
import { ReactComponent as Organization } from '../../assets/images/organization.svg'
import { ReactComponent as Categories } from '../../assets/images/categories.svg'
import { ReactComponent as Slides } from '../../assets/images/slides.svg'
import { ReactComponent as Users } from '../../assets/images/users.svg'

const types = {
  triangle: (props) => <Triangle {...props} />,
  instagram: (props) => <Instagram {...props} />,
  facebook: (props) => <Facebook {...props} />,
  mail: (props) => <Mail {...props} />,
  members: (props) => <Members {...props} />,
  news: (props) => <News {...props} />,
  testimonies: (props) => <Testimonies {...props} />,
  organization: (props) => <Organization {...props} />,
  activities: (props) => <Activities {...props} />,
  categories: (props) => <Categories {...props} />,
  slides: (props) => <Slides {...props} />,
  users: (props) => <Users {...props} />,
};

const Icon = ({ type = 'triangle', size = 40, ...props }) => {
  const px = `${Number(size) ? size : 40}px`;
  const styles = {
    width: px,
    height: px,
  };

  props.style = styles;

  return (
    <>
      {
        console.log(types[type])
      }
      {
        types[type](props)
      }
    </>
  );
};

export default Icon;
