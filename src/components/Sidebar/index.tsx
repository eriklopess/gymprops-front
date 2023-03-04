/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import { BsFillBarChartFill, BsFillPeopleFill } from 'react-icons/bs';
// import { FaMoneyBill } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { Logo } from '../../global';
import LOGO_IMG from '../../assets/Logo.svg';
import { SidebarContainer } from './style';

function Sidebar() {
  const path = useLocation().pathname;
  return (
    <SidebarContainer>
      <Logo src={LOGO_IMG} />
      <hr />
      <div>
        <Link to="/dashboard" className={path === '/dashboard' ? 'active' : ''}>
          <span>
            <ImHome />
          </span>
          Inicio
        </Link>
        <Link
          to="/dashboard/enroll"
          className={
          path === '/dashboard/enroll' ? 'active' : ''
        }
        >
          <span>
            <BsFillPeopleFill />
          </span>
          Alunos
        </Link>
        <Link
          to="/dashboard/staff"
          className={
          path === '/dashboard/staff' ? 'active' : ''
        }
        >
          <span>
            <IoMdSchool />
          </span>
          Professores
        </Link>
        <Link
          to="/dashboard/charts"
          className={
          path === '/dashboard/charts' ? 'active' : ''
        }
        >
          <span>
            <BsFillBarChartFill />
          </span>
          Estatisticas
        </Link>
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
