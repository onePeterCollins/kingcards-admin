import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

import {
  NewsCard,
  StatCard,
  Wrapper
} from "../../components";

import {
  dailySignups,
  dailyWithdrawals,
  dailyTrades,
  dailySignins,
  dailyWithdrawalVolume,
  dailyTradeVolume
} from "../../server/admin-charts/demoCharts";

import demoContactMessages from "../../server/admin-contact-messages/messages";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreIcon from "@material-ui/icons/More";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from "@material-ui/icons/Settings";


const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const chartMenu = (
    <Menu
      id="chart-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <MoreIcon />
        </ListItemIcon>
        <ListItemText primary="View more" />
      </MenuItem>
    </Menu>
  );

  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Signups Today"
            value={103}
            icon={<LocalOfferIcon />}
            color="#51b53f"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Total Users"
            value={2300}
            icon={<PersonIcon />}
            color="#9c27b0"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Pending Withdrawals"
            value={32}
            icon={<NotificationsIcon />}
            color="#ffd740"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Pending Trades"
            value={120}
            icon={<NotificationsIcon />}
            color="#3f51b5"
          />
        </Grid>
        {chartMenu}
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardHeader
              subheader={dailySignups.title}
              action={
                <IconButton id={`signup-chart-menu-button`} onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Bar
                data={dailySignups.data}
                height={dailySignups.height}
                options={dailySignups.options}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardHeader
              subheader={dailyWithdrawals.title}
              action={
                <IconButton id={`withdrawal-chart-menu-button`} onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Bar
                data={dailyWithdrawals.data}
                height={dailyWithdrawals.height}
                options={dailyWithdrawals.options}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardHeader
              subheader={dailyTrades.title}
              action={
                <IconButton id={`trades-chart-menu-button`} onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Bar
                data={dailyTrades.data}
                height={dailyTrades.height}
                options={dailyTrades.options}
              />
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Active Users"
            value={56}
            icon={<LocalOfferIcon />}
            color="#51b53f"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Returning Users"
            value={28}
            icon={<PersonIcon />}
            color="#9c27b0"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="$ Pending Withdrawal volume"
            value={1323}
            icon={<NotificationsIcon />}
            color="#ffd740"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="$ Pending Trade volume"
            value={1870}
            icon={<NotificationsIcon />}
            color="#3f51b5"
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardHeader
              subheader={dailySignins.title}
              action={
                <IconButton id={`signin-chart-menu-button`} onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Bar
                data={dailySignins.data}
                height={dailySignins.height}
                options={dailySignins.options}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardHeader
              subheader={dailyWithdrawalVolume.title}
              action={
                <IconButton id={`withdrawal-volume-chart-menu-button`} onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Bar
                data={dailyWithdrawalVolume.data}
                height={dailyWithdrawalVolume.height}
                options={dailyWithdrawalVolume.options}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardHeader
              subheader={dailyTradeVolume.title}
              action={
                <IconButton id={`trade-volume-chart-menu-button`} onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Bar
                data={dailyTradeVolume.data}
                height={dailyTradeVolume.height}
                options={dailyTradeVolume.options}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <NewsCard subtitle="Last message 24 mins ago" feed={demoContactMessages} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Home;
