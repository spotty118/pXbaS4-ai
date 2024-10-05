import { theme } from 'antd'

export const Theme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    // Colors
    colorPrimary: '#4A90E2',
    colorError: '#FF6B6B',
    colorInfo: '#4A90E2',
    colorSuccess: '#6BCB77',
    colorWarning: '#FFA940',
    colorTextBase: '#333333',
    colorLink: '#4A90E2',
    colorBgBase: '#F9FAFB',
    colorBgContainer: '#FFFFFF',
    colorBorder: '#E5E7EB',
    colorBorderSecondary: '#F3F4F6',
    colorSplit: 'rgba(0, 0, 0, 0.06)',
    // Typography
    fontSize: 16,
    fontSizeHeading1: 40,
    fontSizeHeading2: 32,
    fontSizeHeading3: 26,
    linkDecoration: 'none',

    //Form
    controlItemBgActive: '#EBF5FF',
    controlOutline: 'rgba(74, 144, 226, 0.2)',
    controlHeight: 44,
    controlHeightSM: 36,

    // Layout
    padding: 20,
    boxShadow:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    borderRadius: 10,
    lineType: 'solid',
    lineWidth: 1,
    motion: true,
  },
  components: {
    Form: {
      itemMarginBottom: '28px',
    },

    Layout: {
      headerBg: '#FFFFFF',
      footerBg: '#F9FAFB',
      bodyBg: '#F9FAFB',
      siderBg: '#FFFFFF',
    },
    Menu: {
      activeBarBorderWidth: 3,
      itemHeight: 44,
      horizontalItemSelectedColor: '#4A90E2',
      horizontalItemSelectedBg: '#EBF5FF',
      itemSelectedColor: '#4A90E2',
      itemSelectedBg: '#EBF5FF',
      itemActiveBg: '#EBF5FF',
      itemHoverColor: '#4A90E2',
      itemHoverBg: '#F3F4F6',
      itemColor: 'rgba(0, 0, 0, 0.85)',
      itemBg: 'transparent',
      iconMarginInlineEnd: 12,
      iconSize: 20,
    },
    Button: {
      paddingInlineSM: 16,
      fontWeight: 600,
      borderRadius: 8,
    },
    Card: {
      borderRadius: 12,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
  },
}
