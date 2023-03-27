/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';
import { MdAttachMoney } from 'react-icons/md';
import {
  Bar,
  BarChart,
  CartesianGrid, Tooltip, XAxis, YAxis,
} from 'recharts';
import {
  Timeline, TimelineConnector, TimelineContent, TimelineDot,
  TimelineItem, TimelineOppositeContent, TimelineSeparator,
} from '@mui/lab';
import { Paper, Typography } from '@mui/material';
import QuickInfo from '../../components/QuickInfo';
import Sidebar from '../../components/Sidebar';
import { DashboardContainer, TimelineContainer, TimelineItemContainer } from './style';
import 'react-vertical-timeline-component/style.min.css';

const data1 = [
  {
    name: 'Junho', Faturamento: 4000, Gastos: 2400, amt: 2400,
  },
  {
    name: 'Julho', Faturamento: 3000, Gastos: 1398, amt: 2210,
  },
  {
    name: 'Agosto', Faturamento: 2000, Gastos: 9800, amt: 2290,
  },
  {
    name: 'Setembro', Faturamento: 2780, Gastos: 3908, amt: 2000,
  },
  {
    name: 'Outubro', Faturamento: 2780, Gastos: 3908, amt: 2000,
  },
];

const data2 = [
  {
    name: 'Junho', newEnrolls: 4000, expiredEnrolls: 2400, totalEnrolls: 2400,
  },
  {
    name: 'Julho', newEnrolls: 3000, expiredEnrolls: 1398, totalEnrolls: 2210,
  },
  {
    name: 'Agosto', newEnrolls: 2000, expiredEnrolls: 9800, totalEnrolls: 2290,
  },
  {
    name: 'Setembro', newEnrolls: 2780, expiredEnrolls: 3908, totalEnrolls: 2000,
  },
];

const dataTimeline = [
  {
    date: '2021-09-18T11:00:00.000Z',
    title: 'Novo Funcionário',
    description: 'João da Silva',
    plan: 'Professor',
  },
  {
    date: '2021-09-18T11:00:00.000Z',
    title: 'Novo Aluno',
    description: 'Carlos da Silva',
    plan: 'Plano 1',
  },
];

const dataTimeline2 = [
  {
    date: '2021-09-18T11:00:00.000Z',
    title: 'Novo Aluno',
    description: 'João da Silva',
    plan: 'Plano 1',
  },
  {
    date: '2021-09-18T11:00:00.000Z',
    title: 'Novo Aluno',
    description: 'Carlos da Silva',
    plan: 'Plano 1',
  },
];

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <DashboardContainer>
        <div>
          <QuickInfo
            title="Total de Alunos"
            value="100"
            icon={<BsFillPeopleFill />}
            percentage="+10%"
          />
          <QuickInfo
            title="Total de Professores"
            value="100"
            icon={<IoMdSchool />}
            percentage="+10%"
          />
          <QuickInfo
            title="Total Faturado"
            value="R$ 1000,00"
            icon={<MdAttachMoney />}
            percentage="+145%"
          />
        </div>
        <div>
          <div>
            <Typography variant="h5" textAlign="left" color="textPrimary">
              Faturamento:
            </Typography>
            <BarChart
              width={500}
              height={250}
              data={data1}
            >
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip allowEscapeViewBox={
              { y: true }
            }
              />
              <Bar dataKey="Faturamento" fill="#58ec91" barSize={20} />
              <Bar dataKey="Gastos" fill="#ec5858" barSize={20} />
            </BarChart>
          </div>
          {' '}
          <div>
            <Typography variant="h5" textAlign="left" color="textPrimary">
              Alunos:
            </Typography>
            <BarChart width={500} height={250} data={data2}>
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip allowEscapeViewBox={
              { y: true }
            }
              />
              <Bar
                dataKey="newEnrolls"
                name="Novos Alunos"
                fill="#58ec91"
                barSize={20}
              />
              <Bar
                dataKey="expiredEnrolls"
                name="Alunos Expirados"
                fill="#ec5858"
                barSize={20}
              />
              <Bar
                dataKey="totalEnrolls"
                name="Total de Alunos"
                fill="#7358ec"
                barSize={20}
              />
            </BarChart>
          </div>
        </div>
        <TimelineContainer>
          <div>
            <br />
            <br />
            <Typography variant="h5" textAlign="left" color="textPrimary">Atividades Recentes:</Typography>
            <br />
            <TimelineItemContainer>
              <Timeline position="right">
                {dataTimeline.map((item) => (
                  <TimelineItem position="right">
                    <TimelineOppositeContent>
                      <Typography variant="body1" flexGrow="0" textAlign="left" color="textSecondary">{new Date(item.date).toLocaleString()}</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="success" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={4}>
                        <Typography variant="body1" width="auto" component="h1" padding="10px">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" width="auto" component="h1" padding="10px">
                          Nome:
                          {' '}
                          {item.description}
                          <br />
                          Plano:
                          {' '}
                          {item.plan}
                        </Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </TimelineItemContainer>
          </div>
          <div>
            <br />
            <br />
            <Typography variant="h5" textAlign="left" color="textPrimary">Alunos Recentes:</Typography>
            <br />
            <TimelineItemContainer>
              <Timeline position="right">
                {dataTimeline2.map((item) => (
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography color="textSecondary">
                        {
                      new Date(item.date).toLocaleString()
                      }
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="success" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={4}>
                        <Typography variant="body1" width="auto" component="h1" padding="10px">
                          Aluno Matriculado
                        </Typography>
                        <Typography variant="body2" width="auto" component="h1" padding="10px">
                          Nome do Aluno:
                          {
                         item.description
                        }
                          <br />
                          Plano:
                          {
                          item.plan
                        }
                        </Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </TimelineItemContainer>
          </div>
        </TimelineContainer>
      </DashboardContainer>
    </div>
  );
}

export default Dashboard;
