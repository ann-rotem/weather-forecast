import { useState, useContext } from "react";
import * as S from "./Hourly.style";
import PropTypes from "prop-types";
import { Line, defaults } from "react-chartjs-2";
import { ThemeContext } from "styled-components";
import { Title } from "../Weather.style";

const Hourly = ({ data }) => {
	const theme = useContext(ThemeContext);
	const [checkedDataset, setCheckedDataset] = useState([
		true,
		false,
		true,
		false,
	]);

	const handleCheckedChange = (position) => {
		const updatedCheckedDataset = checkedDataset.map((item, index) =>
			index === position ? !item : item
		);
		setCheckedDataset(updatedCheckedDataset);
	};

	// Set default color and font size
	defaults.color = theme.colors.text.primary;
	defaults.font.size = 14;

	// Data for line chart
	const chartData = {
		labels: data.labels,
		datasets: [
			{
				label: "Temperature",
				data: data.temp,
				borderColor: theme.colors.chart.datasetY,
				yAxisID: "y",
				hidden: !checkedDataset[0],
			},
			{
				label: "Feels Like",
				data: data.feels,
				borderColor: theme.colors.chart.datasetY,
				borderDash: [8],
				yAxisID: "y",
				hidden: !checkedDataset[1],
			},
			{
				label: "Humidity",
				data: data.humidity,
				borderWidth: 1,
				borderColor: theme.colors.chart.datasetY1,
				hidden: !checkedDataset[2],
				yAxisID: "y1",
			},
			{
				label: "Precipitation",
				data: data.precip,
				borderWidth: 1,
				borderColor: theme.colors.chart.datasetY1,
				borderDash: [8],
				hidden: !checkedDataset[3],
				yAxisID: "y1",
			},
		],
	};

	// Options for line chart
	const options = {
		type: "line",
		data: chartData,
		maintainAspectRatio: false,
		responsive: true,
		spanGaps: true,
		interaction: {
			mode: "x",
			intersect: false,
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				padding: 10,
				backgroundColor: theme.colors.background.primary,
				titleColor: theme.colors.text.primary,
				titleFont: {
					size: 18,
				},
				bodyColor: theme.colors.text.strong,
				bodySpacing: 5,
				caretSize: 15,
				displayColors: false,
				borderColor: theme.colors.border.primary,
				borderWidth: 1,
				cornerRadius: 15,
				usePointStyle: true,
				callbacks: {
					title: function (context) {
						let title = context[0].label || "";
						if (title) {
							return (title += ":00");
						}
					},
					label: function (context) {
						let label = context.dataset.label || "";
						if (label) {
							label += ": ";
						}
						if (context.parsed.y !== null) {
							if (context.dataset.yAxisID === "y") {
								label += context.parsed.y + "°";
							}
							if (context.dataset.yAxisID === "y1") {
								label += context.parsed.y + "%";
							}
						}
						return label;
					},
				},
			},
		},
		datasets: {
			line: {
				backgroundColor: "transparent",
				borderWidth: 3,
				pointRadius: 0,
				tension: 0.3,
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: "Hours",
				},
				grid: {
					display: false,
				},
				ticks: {
					source: "auto",
					autoSkip: true,
					font: {
						size: 12,
					},
				},
			},
			y: {
				position: "left",
				ticks: {
					callback: (value) => value + "°",
				},
				stepSize: 1,
				suggestedMin: Math.min(...data.temp, ...data.feels) - 1,
				suggestedMax: Math.max(...data.temp, ...data.feels) + 1,
			},
			y1: {
				position: "right",
				ticks: {
					font: {
						size: 14,
					},
					callback: (value) => value + "%",
				},
				grid: {
					drawOnChartArea: false,
				},
				stepSize: 10,
				suggestedMin: Math.min(...data.humidity, ...data.precip),
				suggestedMax: Math.max(...data.humidity, ...data.precip),
			},
		},
	};
	return (
		<S.Hourly>
			<Title>Hourly Forecast</Title>
			<S.Wrapper>
				<S.Legend>
					{chartData.datasets.map((dataset, index) => {
						return (
							<S.LegendItem key={index}>
								<S.Checkbox
									type="checkbox"
									id={dataset.label}
									name={dataset.label}
									value={dataset.label}
									checked={checkedDataset[index]}
									onChange={() => handleCheckedChange(index)}
								/>
								<S.LabelText htmlFor={dataset.label}>
									{dataset.label}
								</S.LabelText>
								<S.LabelStyle
									dataset={dataset.yAxisID}
									dashed={index % 2}
								/>
							</S.LegendItem>
						);
					})}
				</S.Legend>
				<S.Chart>
					<Line data={chartData} options={options} />
				</S.Chart>
			</S.Wrapper>
		</S.Hourly>
	);
};

Hourly.propTypes = {
	data: PropTypes.shape({
		labels: PropTypes.arrayOf(PropTypes.string),
		temp: PropTypes.arrayOf(PropTypes.number),
		feels: PropTypes.arrayOf(PropTypes.number),
		humidity: PropTypes.arrayOf(PropTypes.number),
		precip: PropTypes.arrayOf(PropTypes.number),
	}),
};

export default Hourly;
